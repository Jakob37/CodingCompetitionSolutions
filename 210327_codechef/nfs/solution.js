process.stdin.resume();
process.stdin.setEncoding('utf8');

// declare global variables
var input_stdin = "";
var chunks = "";

// standard input is stored into input_stdin
process.stdin.on('data', function (data) {

    //for local environment windows
    if(data.trim() == 'end' ){
        chunks = input_stdin.split("\n");
        start();
    }
    
    input_stdin += data;

});

// standard input is done and stored into an array
process.stdin.on('end', function () {
//process.on('SIGINT', function(){
    chunks = input_stdin.split("\n");
    main();
});

function main(){
    var s=1;
    var t=parseInt(chunks[0]);
    var a=[];
  while(t--){

     let [uu,vv,aa,ss]=chunks[s++].split(" ").map(Number);
        var all=uu*uu-2*aa*ss;
        if(all>=1){
            var vel=Math.sqrt(all);
            if(vel<=vv){
                a.push("Yes");
            }else{
                a.push("No")
            }
        }else{
            a.push("Yes");
        }
        
  }
 console.log(a.join("\n"));
    
}
