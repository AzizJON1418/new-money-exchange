// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var rez = {},qw={};
    if(currency>10000) {
       qw['error']="You are rich, my friend! We don't have so much coins for exchange";
    return qw;
   }
   else
    while(currency>0){
       if(currency>=50) {
           h=Math.floor(currency/50);
           currency=currency%50;
           rez['H']=h;
       }
     if(currency>=25) {
        q=Math.floor(currency/25);
        currency=currency%25;
        rez['Q']=q;   
     }
     if(currency>=10) {
        d=Math.floor(currency/10);
        currency=currency%10;
        rez['D']=d;   
     }
     if(currency>=5) {
        n=Math.floor(currency/5);
        currency=currency%5;   
        rez['N']=n;
     }
     if(currency>=1) {
        p=Math.floor(currency/1);
        currency=currency%1;
        rez['P']=p;   
     }
    }
    return rez; 

}
