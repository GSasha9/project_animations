import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
