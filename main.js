function importArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            arr[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return arr;
}

function display(arr) {
    for (let i = 0; i < 10; i++) {
        document.write("<br>");
        for (let j = 0; j < 10; j++) {
            document.write(arr[i][j]+" ");

        }
    }
}
function count(arr)
{
    let number=parseInt(prompt("Import number need find"));
    let count=0;
    for(let i=0;i<10;i++)
    {
        for(let j=0;j<10;j++)
        {
            if(number==arr[i][j])
            {
                document.write('<br> Number at position row '+(i+1)+" colum "+(j+1));
                count++;
            }
        }
    }
    document.write('<br> Counter'+count);
}

let array = importArray();
display(array);
