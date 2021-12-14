class Question{
    constructor(ask, ans, id){
        this.ask = ask
        this.ans = ans
        this.success = false
        this.id = id
    }
    append(){
        
        let p = document.createElement("P")
        let text = document.createTextNode(this.ask)
        p.appendChild(text)

        let x = document.createElement("INPUT")
        x.setAttribute("type", "text")
        x.setAttribute("id", this.id)

        let div = document.createElement("DIV")
        div.appendChild(p)
        div.appendChild(x)
        document.body.appendChild(div)
    }
    check(){
        
        this.success = !!(document.getElementById(this.id).value == this.ans)
    }
}

window.onload = () => {
    for (let data of questions){
        data.append()
    }
}

function submit(arr){
    let match = 0, total = arr.length
    for (let data of arr){
        data.check()
        if (data.success){
            match ++
        }
    }
    let p = document.createElement("P")
    let text = document.createTextNode(`You got ${match}/${total} right`)
    p.appendChild(text)
    document.body.appendChild(p)
}

let questions = [
    new Question("2 + x = 20", "18", 1),
    new Question("(4x + 4)/2 = 25 - 5", "11", 1)
]


