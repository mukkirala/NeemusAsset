import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ChatbotService } from '../../core/services/chatbot.service';
import { Chat, Message } from '../../core/models/chat.model';

@Component({
  selector: 'app-ai-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './chatbot.component.html'
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesEnd') private messagesEnd!: ElementRef;

  private chatbotService = inject(ChatbotService);

  chats: Chat[] = [];
  activeChatIndex: number | null = null;
  input = '';
  darkMode = false;
  loading = false;

  suggestions = [
    "show transfered assets",
    "Show all damaged assets",
    "show available assets",
    "total assets",
    "damaged assets",
    "available assets",
    "List all assets",
    "show repaired assets"
  ];

  ngOnInit() {
    // Initialize with a default chat if needed
    if (this.chats.length === 0) {
      this.startNewChat();
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage(directText: string | null = null) {
    const messageText = directText ?? this.input;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (this.activeChatIndex === null) {
      const newChat: Chat = {
        name: `Chat ${this.chats.length + 1}`,
        messages: [userMsg]
      };
      this.chats.push(newChat);
      this.activeChatIndex = this.chats.length - 1;
    } else {
      this.chats[this.activeChatIndex].messages.push(userMsg);
    }

    if (!directText) this.input = '';
    this.loading = true;

    this.chatbotService.sendMessage(userMsg.text).subscribe({
      next: (data) => {
        const botMsg: Message = {
          sender: 'bot',
          text: data.response || "No response",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        if (this.activeChatIndex !== null) {
          this.chats[this.activeChatIndex].messages.push(botMsg);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Chat error:', err);
        const errorMsg: Message = {
          sender: 'bot',
          text: "⚠️ Server error. Please ensure the chatbot service is running at localhost:5000.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        if (this.activeChatIndex !== null) {
          this.chats[this.activeChatIndex].messages.push(errorMsg);
        }
        this.loading = false;
      }
    });
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  handleSuggestionClick(text: string) {
    this.sendMessage(text);
  }

  startNewChat() {
    const newChat: Chat = {
      name: `Chat ${this.chats.length + 1}`,
      messages: []
    };
    this.chats.push(newChat);
    this.activeChatIndex = this.chats.length - 1;
    this.input = '';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  get activeMessages(): Message[] {
    return this.activeChatIndex !== null ? this.chats[this.activeChatIndex].messages : [];
  }

  isTable(text: string): boolean {
    return text.includes('|');
  }

  getTableRows(text: string): string[][] {
    return text.split('\n')
      .map(row => row.split('|').map(cell => cell.trim()).filter(Boolean))
      .filter(cells => cells.length > 0 && !cells.every(c => c.match(/^---+$/)));
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesEnd) {
        this.messagesEnd.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {}
  }
}
