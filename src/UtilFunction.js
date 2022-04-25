export const translateCurrency = data => {
    switch(data){
        case "USD":
            return "United States Dollar"
        case "CAD":
            return "Canadian Dollar"
        case "IDR":
            return "Indonesian Rupiah"
        case "GBP":
            return "British Pound"
        case "CHF":
            return "Swiss Franc"
        case "SGD":
            return "Singapore Dollar"
        case "INR":
            return "Indian Rupee"
        case "MYR":
            return "Malaysian Ringgit"
        case "JPY":
            return "Japanese Yen"
        case "KRW":
            return "Sout Korean Won"
        case "EUR":
            return "Euro"
        default:
            return "#000000"

    }
}

export const currencyFormat = input => {
    return input?.toString().replace(/[,.]/g, function (x) { return x == "," ? "." : ","; }); 
}

export const dataCurrency = [
    {name: 'USD'},
    {name: 'CAD'},
    {name: 'IDR'},
    {name: 'GBP'},
    {name: 'CHF'},
    {name: 'SGD'},
    {name: 'INR'},
    {name: 'MYR'},
    {name: 'JPY'},
    {name: 'KRW'}
]