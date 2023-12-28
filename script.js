//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer: პრიმიტიული მონაცემით შეგვიძლია მხოლოდ ერთი მნიშვნელობის მინიჭება, 
// ხოლო არა პრიმიტიულ მონაცემით ბევრი მნიშვნელობის მინიჭება.

//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer: const როდესაც მნიშვნელობას მივანიჭებთ მისი შეცვლა აღარ შეგვიძლია
// ხოლო let შეგვლიძლია მნიშვნელობის შეცვლა ნებისმიერ დროს რამდენჯერაც გვენდომება.

//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.

let names = 'Luka';
let age = 19;
let isMaried = false;

console.log("names");
console.log("age");
console.log("isMaried");

names = 'George';
age = 23;
isMaried = true;

console.log("names");
console.log("age");
console.log("isMaried");


//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ


let user = [
    {
        firstname: 'Luka',
        lastname: 'Giunashvili',
        age: 19,
        email: 'lukagiunashvili2@gmail.com',
        adress: 'Gori',
        isStudent: true ,
    }
]

console.log(user);