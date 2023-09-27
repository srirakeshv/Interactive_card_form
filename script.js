let cardholderName=document.querySelector('#holder-name')
let cardholderNumber=document.querySelector('#holder-number')
let experiyMonth=document.querySelector('#exp1')
let experiyYear=document.querySelector('#exp2')
let cvcNumber=document.querySelector('#secret')
let card_cardholderName=document.querySelector('#nm')
let card_cardholderNumber=document.querySelector('#namehl')
let card_month=document.querySelector('#cmonth')
let card_year=document.querySelector('#cyear')
let card_csv=document.querySelector('#csvsecret')
let confirmButton=document.querySelector('#confirm')

// errors
let nameError=document.querySelector('#nameerror')
let numberError=document.querySelector('#numbererror')
let montherror=document.querySelector('#montherror')
let yearError=document.querySelector('#yearerror')
let cvcError=document.querySelector('#cvcerror')

// action
let thankyou=document.querySelector('.thankyou')
let content=document.querySelector('.content')
let reTake=document.querySelector('#continue')

// initially
nameError.style.display='none'
numberError.style.display='none'
montherror.style.display='none'
yearError.style.display='none'
cvcError.style.display='none'

function empty(){
    cardholderName.style.borderColor='hsl(0, 100%, 66%)'
    nameError.style.display='block'
    nameError.innerHTML="can't be empty"
    
    cardholderNumber.style.borderColor='hsl(0, 100%, 66%)'
    numberError.style.display='block'
    numberError.innerHTML="can't be empty"
    
    experiyMonth.style.borderColor='hsl(0, 100%, 66%)'
    montherror.style.display='block'
    montherror.innerHTML="can't be empty"
    
    experiyYear.style.borderColor='hsl(0, 100%, 66%)'
    yearError.style.display='block'
    yearError.innerHTML="can't be empty"
    
    cvcNumber.style.borderColor='hsl(0, 100%, 66%)'
    cvcError.style.display='block'
    cvcError.innerHTML="can't be empty"

}

// input to card
cardholderName.addEventListener('input',()=>{
    if(cardholderName.value==='')
    {
        card_cardholderName.innerHTML='Jane Appleseed'
    }
    else{
        card_cardholderName.innerHTML=cardholderName.value
    }
    
})

cardholderNumber.addEventListener('input',()=>{
    if(cardholderNumber.value==='')
    {
        card_cardholderNumber.innerHTML='0000 0000 0000 0000'
    }
    else{
        card_cardholderNumber.innerHTML=cardholderNumber.value
    }
})

experiyMonth.addEventListener('input',()=>{
    if(experiyMonth.value==='')
    {
        card_month.innerHTML='00'
    }
    else{
        card_month.innerHTML=experiyMonth.value
    }
})

experiyYear.addEventListener('input',()=>{
    if(experiyYear.value==='')
    {
        card_year.innerHTML='00'
    }
    else{
        card_year.innerHTML=experiyYear.value
    }
})

cvcNumber.addEventListener('input',()=>{
    if(cvcNumber.value==='')
    {
        card_csv.innerHTML='000'
    }
    else{
        card_csv.innerHTML=cvcNumber.value
    }
})

// button work
confirmButton.addEventListener('click',()=>{
    
    if (cardholderName.value==='' && cardholderNumber.value==='' && experiyMonth.value==='' && experiyYear.value==='' && cvcNumber.value==='')
    {
        empty()
    }
    else{

        // name
        if(cardholderName.value==='')
        {
            nameError.style.display='block'
            nameError.innerHTML="can't be empty"
            cardholderName.style.borderColor='hsl(0, 100%, 66%)'
        }
        else if(cardholderName.value!=='')
        {
            if (/[0-9]/.test(cardholderName.value))
            {
                nameError.style.display='block'
                nameError.innerHTML='must be letter'
                cardholderName.style.borderColor='hsl(0, 100%, 66%)'
            }
            else if (/[a-z,A-Z]/.test(cardholderName.value))
            {
                nameError.style.display='none'
                cardholderName.style.borderColor='rgb(228, 221, 221)'
            }
        }

        // number
        if(cardholderNumber.value==='')
        {
            numberError.style.display='block'
            numberError.innerHTML="can't be empty"
            cardholderNumber.style.borderColor='hsl(0, 100%, 66%)'
        }
        else if(cardholderNumber.value!=='')
        {
            if(/[a-z.A-Z]/.test(cardholderNumber.value))
            {
                numberError.style.display='block'
                numberError.innerHTML="wrong format, number only"
                cardholderNumber.style.borderColor='hsl(0, 100%, 66%)'
            }
            else if(/[0-9]/.test(cardholderNumber.value))
            {
                if (cardholderNumber.value.length===19)
                {
                    numberError.style.display='none'
                    cardholderNumber.style.borderColor='rgb(228, 221, 221)'
                }
                else{
                    numberError.style.display='block'
                    numberError.innerHTML="length equal to 19"
                    cardholderNumber.style.borderColor='hsl(0, 100%, 66%)'
                }
            }
        }

        //experiy month
        if(experiyMonth.value==='')
        {
            montherror.style.display='block'
            montherror.innerHTML="can't be empty"
            experiyMonth.style.borderColor='hsl(0, 100%, 66%)'
        }
        else if(experiyMonth.value!=='')
        {
            if (experiyMonth.value.length>=1 && experiyMonth.value.length<=2)
            {
                if(experiyMonth.value>=1 && experiyMonth.value<=12)
                {
                    montherror.style.display='none'
                    experiyMonth.style.borderColor='rgb(228, 221, 221)'
                }
                else{
                    montherror.style.display='block'
                    montherror.innerHTML="Must between 1 and 12"
                    experiyMonth.style.borderColor='hsl(0, 100%, 66%)'
                }
            }
            else{
                montherror.style.display='block'
                montherror.innerHTML="Must be 1 or 2"
                experiyMonth.style.borderColor='hsl(0, 100%, 66%)'
            }
            
        }

        //experiy year
        if(experiyYear.value==='')
        {
            yearError.style.display='block'
            yearError.innerHTML="can't be empty"
            experiyYear.style.borderColor='hsl(0, 100%, 66%)'
        }
        else if(experiyYear.value!=='')
        {
            if(experiyYear.value.length>=1 && experiyYear.value.length<=2)
            {
                yearError.style.display='none'
                experiyYear.style.borderColor='rgb(228, 221, 221)'
            }
            else{
                yearError.style.display='block'
                yearError.innerHTML="Must be 1 or 2"
                experiyYear.style.borderColor='hsl(0, 100%, 66%)'
            }
            
        }

        // cvc number
        if(cvcNumber.value==='')
        {
            cvcError.style.display='block'
            cvcError.innerHTML="can't be empty"
            cvcNumber.style.borderColor='hsl(0, 100%, 66%)'
        }
        else if(cvcNumber.value!=='')
        {
            if(cvcNumber.value.length===3)
            {
                cvcError.style.display='none'
                cvcNumber.style.borderColor='rgb(228, 221, 221)'
            }
            else{
                cvcError.style.display='block'
                cvcError.innerHTML="Must be 3"
                cvcNumber.style.borderColor='hsl(0, 100%, 66%)'
            }
            
        }
        if(nameError.style.display==='none' && numberError.style.display==='none' && montherror.style.display==='none' && yearError.style.display==='none' && cvcError.style.display==='none')
        {
            // console.log('yes')
            thankyou.style.display='flex'
            content.style.display='none'
        }
    }
    
})

reTake.addEventListener('click',()=>{
    thankyou.style.display='none'
    content.style.display='flex'
    cardholderName.value=''
    cardholderNumber.value=''
    experiyMonth.value=''
    experiyYear.value=''
    cvcNumber.value=''
    card_cardholderName.innerHTML='Jane Appleseed'
    card_cardholderNumber.innerHTML='0000 0000 0000 0000'
    card_month.innerHTML='00'
    card_year.innerHTML='00'
    card_csv.innerHTML='000'
})