// null safety

import 'dart:ffi';

void main() {
  Person p = Person();
  print(p.nameChange(p.name));

  People pp = People();

  String a = 'abac';
  print(a[a.length - 1]);

  var acceptor = new List.filled(5, null, growable: false);
  print(acceptor);
}

class Person {
  late String name;
  Person() {
    this.name = 'james';
  }
  String nameChange(String name) {
    this.name = name;
    return name.toUpperCase();
  }
}

class People {
  late String name;
  late int age;
  late String hobby;
  // People() {
  //   this.name = 'KIM';
  //   this.age = 11;
  //   this.hobby = 'soccer';
  // }

}


/* 
void main() {
  Person p = Person();
  // p.printAge();
  // print(p.age);
  print(p.nameChange(p.name!));

}

class Person {
  // int x = cc();
  // int age = calculation();
  // void printAge() { 
  //   print('age');
  // }
  String? name;

  Person() {
    this.name = 'peter';
  }

  String nameChange(String name) {
    this.name = name;
    return name.toUpperCase();
  }
}

int cc() {
  print('-0-');
  return 1;
}

int calculation() {
  print('calculate');
  return 30;
} */
