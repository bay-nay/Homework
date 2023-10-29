alert('Siuuuuuuuuuuuu')

const some = prompt("Bạn đã ăn cơm chưa ?");

if (some == "no" || some == "không" || some == "chưa") {
    const none = prompt("Bạn muốn ăn phở không ?")
    if (none == "no" || none == "không") {
        const hant = prompt("Bạn muốn ăn cơm sườn không ?")
        if (hant == "no" || some == "không") {
            const sent = prompt("Bạn muốn ăn bò khô không ?")
        } else {
            alert("Ok")
            
        }
    } else {
        alert("Ok")
    }
} else {
    alert('Ok')
}



