import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],  // ✅ ici
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // titleToAdd: string | undefined;
  // priceToAdd: number | undefined;

  constructor() { }

  ngOnInit(): void {}

  // Méthode pour gérer la soumission du formulaire template-driven
  // onSubmit(form: NgForm) {
  //   const newTitle = this.titleToAdd;
  //   const newPrice = this.priceToAdd;
  //   console.log("Article à ajouter :", newTitle, newPrice);
  // }

  // FormControls pour formulaire reactive
    titleToAdd = new FormControl('');
    priceToAdd = new FormControl(0);

  // Méthode pour gérer la soumission du formulaire reactive
  onSubmit() {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log('Article à ajouter :', newTitle, newPrice);
  }

}