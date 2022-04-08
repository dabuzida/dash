// null safety
import 'dart:io';

final b = "sss";
const c = 1;

class People {
  String? name;
  int? age;
  String? hobby;
  // static const String name = "KIM";
  // static const int age=11;
  // static const String hobby="soccer";
  People() {
    this.name = "KIM";
    this.age = 11;
    this.hobby = "soccer";
  }
}

final zz = null;

class Xxx {}

void main() {
  final String b;
  int age;
  // print(age);
  int a;

  Person p = Person();
  print(p.nameChange(p.name));
  // print(a);
}

// int age;
// 오류인이유가 컴파일? 실행? 될때 main밖 코드들이 먼저 미리 실행되느라? 갖다써지는데
// null아닌 int형이여야하는 변수가 초기화 안되있으니 오류
int? n;
// 초기화 안되면 기본적으로 null이 될테니깐 오류x

class Person {
  String? name;
  String nameChange(String anme) {
    this.name = name;
    return name.toUpperCase();
  }
}
