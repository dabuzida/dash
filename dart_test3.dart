// null safety

import 'dart:ffi';

void main() {
  /* Person p = Person();
  print(p.nameChange(p.name));

  People pp = People();

  String a = 'abac';
  print(a[a.length - 1]);

  var acceptor = new List.filled(5, null, growable: false);
  print(acceptor); */

  String x = '6.';
  double y = double.parse(x);
  double z = double.parse('0.6');
  print(y.runtimeType);
  print(z);

  if (y is double) {
    var num1212 = 12;
  }

  /* var v = <String>['0.5', '+', '0.7'];
  double num1 = double.parse(v[0]);
  double num2 = double.parse(v[2]);
  late double result;
  String sign = v[1];

  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
  }
  print(result);
  print(result.runtimeType); */
  String vi = 'blind';
  int ii = 3;
  String xi = vi.substring(0, vi.length - ii);
  print(vi);
  print(xi);

  print(double.parse('4'));
  print(double.parse('3.22'));
  print(double.parse('1') + double.parse('3.22'));
  print(double.parse('3') + double.parse('4.22'));

  // String i = '5/0';
  // if (double.parse(i).isInfinite) {
  //   print('hi');
  // }

  /* var x = 0 / 0; //NaN
  var y = 5 / 0; //Infinity
  var z = 11; // Finite
  var i = -451; // Negative
  print(x);
  if (y.isInfinite) {
    print(y);
  }
  if (z.isFinite) {
    print(z);
  }
  if (i.isNegative) {
    print(i);
  }
  print( 33+y);
  print(y + 33); */
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
