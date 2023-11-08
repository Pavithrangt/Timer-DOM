
let div = document.createElement("div")
div.id="countdown"
document.body.append(div)


function counts (){
let count =10

setTimeout(()=>{

    let get1= document.getElementById("countdown")
    get1.innerHTML=count;
    count--

    setTimeout(()=>{

        let get1= document.getElementById("countdown")
        get1.innerHTML=count;
        count--
    
        setTimeout(()=>{

            let get1= document.getElementById("countdown")
            get1.innerHTML=count;
            count--
        
            setTimeout(()=>{

                let get1= document.getElementById("countdown")
                get1.innerHTML=count;
                count--
            
                setTimeout(()=>{

                    let get1= document.getElementById("countdown")
                    get1.innerHTML=count;
                    count--
                
                    setTimeout(()=>{

                        let get1= document.getElementById("countdown")
                        get1.innerHTML=count;
                        count--
                        setTimeout(()=>{

                            let get1= document.getElementById("countdown")
                            get1.innerHTML=count;
                            count--
                        
                            setTimeout(()=>{

                                let get1= document.getElementById("countdown")
                                get1.innerHTML=count;
                                count--
                            
                                setTimeout(()=>{

                                    let get1= document.getElementById("countdown")
                                    get1.innerHTML="Happy Independance Day"
                                    
                                
                                
                                
                                },1000)
                            
                            },1000)
                        
                        },1000)
                    
                    
                    },1000)
                
                },1000)
            
            },1000)
        
        },1000)
    
    },1000)

},1000)




}

counts()