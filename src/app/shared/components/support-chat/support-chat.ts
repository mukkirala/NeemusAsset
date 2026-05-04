import { Component, ElementRef, ViewChild, AfterViewChecked, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-support-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './support-chat.html'
})
export class SupportChatComponent implements AfterViewChecked {
  @ViewChild('chatEnd') private chatEnd!: ElementRef;

  private http = inject(HttpClient);

  open = false;
  messages: Message[] = [];
  input = '';
  isTyping = false;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.open = !this.open;
  }

  sendMessage() {
    if (!this.input.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: this.input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.messages.push(userMsg);
    const messageToSend = this.input;
    this.input = '';
    this.isTyping = true;

    // Call the backend API
    this.http.post<any>('http://localhost:5000/chat', { message: messageToSend }).subscribe({
      next: (res) => {
        setTimeout(() => {
          const botMsg: Message = {
            sender: 'bot',
            text: res.reply || "I'm here to help!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          this.messages.push(botMsg);
          this.isTyping = false;
        }, 1000);
      },
      error: (err) => {
        console.error('Chat error:', err);
        // Fallback for demo if API is not running
        setTimeout(() => {
          const botMsg: Message = {
            sender: 'bot',
            text: "I'm currently in demo mode. Please ensure the backend is running at localhost:5000.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          this.messages.push(botMsg);
          this.isTyping = false;
        }, 1000);
      }
    });
  }

  setQuickReply(text: string) {
    this.input = text;
    this.sendMessage();
  }

  private scrollToBottom(): void {
    try {
      if (this.open && this.chatEnd) {
        this.chatEnd.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {}
  }
}
