# overly-excited
Create an `addExcitement` function that should `console.log()` rows of words. It should take an array containing the words of a sentence and output them in the developer console.

> **Example output:**  
>  
> The   
> The walrus    
> The walrus danced      
> The walrus danced through     
> The walrus danced through the     
> The walrus danced through the trees         
> The walrus danced through the trees in            
> The walrus danced through the trees in the        
> The walrus danced through the trees in the light  
> The walrus danced through the trees in the light of   
> The walrus danced through the trees in the light of the    
> The walrus danced through the trees in the light of the moon  
> ...

Create an array that contains the words in the sentence
```
let sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];
```

## Adding Conditions to the Loop

Add logic to `addExcitement` that places an exclamation point (!) after every third word. 

Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

> If the current value of the [counter variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) can be evenly divided by 3 - using the JavaScript [remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder) operator - then add a single exclamation point (!) to the output.

> **Example output:**  
>  
> The               
> The walrus            
> The walrus danced!                
> The walrus danced! through            
> The walrus danced! through the            
> The walrus danced! through the trees!         
> The walrus danced! through the trees! in          
> The walrus danced! through the trees! in the          
> The walrus danced! through the trees! in the light!           
> The walrus danced! through the trees! in the light! of            
> The walrus danced! through the trees! in the light! of the        
> The walrus danced! through the trees! in the light! of the moon!      
> ...

## Challenge

Add logic in the `addExcitement` function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3. 


> **Example output:**  
>  
> The                   
> The walrus            
> The walrus danced!            
> The walrus danced! through            
> The walrus danced! through the            
> The walrus danced! through the trees!!            
> The walrus danced! through the trees!! in         
> The walrus danced! through the trees!! in the             
> The walrus danced! through the trees!! in the light!!!            
> The walrus danced! through the trees!! in the light!!! of             
> The walrus danced! through the trees!! in the light!!! of the             
> The walrus danced! through the trees!! in the light!!! of the moon!!!!            
> ...
