/*--------------LOOPS(DÖNGÜLER)-----------------------*/
// Döngüler aynı kodun koşula bağlı olarak sürekli çalışması için kullanılır.
// looplar for la başlıyor
// ileriye doğru arttırma, geriye doğru azaltma,arraylerle kullanma
for (let i = 0; i < 5; i++) {   // syntax ı bu şekildedir.
    console.log(i)
}
// ileriye doğru arttırma

for (let i = 0; i < 5; i++) {
    console.log(i * 2)
}

for (let i = 0; i === 5; i++) {  //i=0 i===3 olamayacağından dolayı loop çalışmaz.
    console.log(i)
}
// geriye doğru azaltma

for (let index = 10; index > 0; index--) {
    console.log("%")                            // Burda yazılan değere göre çıktı verir.

}
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 10))  // 4 tane random numara üretebiliriz.
}

let result = 0;
for (let i = 0; i < 5; i++) {
    result = i;
}
console.log(result)

let sampleArr = ["m", "u", "r", "k", "a"]
randomNum = [Math.floor(Math.random() * 5)]
console.log(sampleArr[randomNum])

for (let i = 0; i < 5; i++) {               // for döngüsünü oluşturmak için başlangıç ve bitiş koşulu gerekiyor.3. olarak nasıl artacağını belirtiyoruz.
    let randomNum1 = Math.floor(Math.random() * 5)
    console.log(sampleArr[randomNum1])
}

// arraylarla kullanma

let myArray = ["java", "html", "css", "js"]
for (let i = 0; i < myArray.length; i++) { // burda yazılan myArray.length 'in anlamı arrayın uzunluğuna göre bağlamış oluyoruz.
    console.log(myArray[i]);
}

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === "java") {
        console.log("Burada java var.")
    }
}

let myNum = [8, 3, 7];
for (let i = 0; i < myNum.length; i++) {

    if (myNum[i] > myNum[i + 1]) {
        console.log("ilk değer ikinciden büyük")
        let temp = myNum[i]
        myNum[i] = myNum[i + 1]
        myNum[i + 1] = temp
    }



}
console.log(myNum)

let arrayim = [3, 6, 9];
//let sum = arrayim[0]+ arrayim[1]+arrayim[2];  //array içini toplamak istiyorsak klasik yöntemle bu şekilde yapıyoruz.

let sum = 0;
for (let e = 0; e < arrayim.length; e++) {
    sum += arrayim[e];
}
console.log(sum)
//ilk döngüde => sum = sum + arrayim[0]= sum=0+3=3
//ikinci döngüde => sum = sum + arrayim[1]= sum=3+6=9
//üçüncü döngüde => sum = sum + arrayim[2]= sum=9+7=16 döngü bu şekilde çalışıyor.

console.log(sum/arrayim.length)  // eğer bizden ortalamasını istenirse bu şekilde yaparız.

//===============örnek==============
let yaslar = [["ahmet",18],["veli", 22],["ayşe",20]]
let summy = 0;
for (let y = 0; y < yaslar.length; y++) {
    summy += yaslar[y][1];
    
}console.log(summy)
console.log(summy/yaslar.length)


//========break ve continue =====

let newArr =[1,2,3,4,5,66,8,22,44,23,7,99]
let newnew =0; 
for (let i = 0; i < newArr.length; i++) {
    if(newArr[i]>10){
        console.log(newArr[i])
        continue;             //denklemden koşulu sağlanan durum dışarı çıkar.Yani pas geçer. Bir sonraki döngüye gider. 
        //break;         // continue yerine break kullanırsak bulunduğu değere gelince denklem bitiyor. bir sonraki döngüye geçmiyor.
    }
    newnew += newArr[i];
    
}console.log(newnew)