import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-class.component.html',
  styleUrls: ['./asset-class.component.css']
})
export class AssetClassComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
