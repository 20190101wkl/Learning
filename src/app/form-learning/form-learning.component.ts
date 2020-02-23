import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-learning',
  templateUrl: './form-learning.component.html',
  styleUrls: ['./form-learning.component.css']
})
export class FormLearningComponent implements OnInit {

  user: FormControl = new FormControl('aaa'); // 这个参数指定formControl的初始值

  // FormGroup 一组FormControl的集合
  fromModel: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      form: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('aaa@a.com'),
      new FormControl('b@b.com')
    ])
  });



  emails: FormArray = new FormArray([
    new FormControl('aaa@a.com'),
    new FormControl('b@b.com')
  ])

  selectCharset = 'utf8';
  charset = [
    'UTF8MB4', 'UTF8', 'GBK', 'LATIN1', 'BINARY', 'BIG5', 'DEC8', 'CP850', 'HP8', 'KOI8R', 'LATIN2', 'SWE7', 'ASCII',
    'UJIS', 'SJIS', 'HEBREW', 'TIS620', 'EUCKR', 'KOI8U', 'GB2312', 'GREEK', 'CP1250', 'LATIN5', 'ARMSCII8', 'UCS2',
    'CP866', 'KEYBCS2', 'MACCE', 'MACROMAN', 'CP852', 'LATIN7', 'CP1251', 'UTF16', 'UTF16LE', 'CP1256', 'CP1257',
    'UTF32', 'GEOSTD8', 'CP932', 'EUCJPMS'
  ];
  createDbForm;

  constructor(private fb: FormBuilder ) {
    this.createDbForm = this.fb.group({
      dbName: ['', [Validators.required]],
      charset: ['' , [Validators.required]]
    });
  }

  ngOnInit() {
  }

  OnSubmit() {
    console.log(this.fromModel.value);
  }

  addEmails() {
    const emails = this.fromModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
