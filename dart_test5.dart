int value1 = 0;

Future<int> post() async {
   await Future.delayed(Duration(seconds: 2), (() {
  
  }));

    value1++;
  

  return value1;
}

void main() async {
  final post1 = post;
  final post2 = post;
  final post3 = post;

  final resultPost1 =  post1();
  print('resultPost1: $resultPost1');
    final resultPost2 =  post2();
  print('resultPost2: $resultPost2');
    final resultPost3 =   post3();
  print('resultPost3: $resultPost3');

  // final eee = await result;
  // print(eee);
}
