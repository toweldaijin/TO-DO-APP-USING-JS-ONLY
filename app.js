const onClickAdd = () => {
    /* テキストボックスの値を取得し、初期化する */
    const inputText = document.getElementById("addText").value;
    document.getElementById("addText").value = "";
    
    /* li生成 */
    const li = document.createElement("li");

    /* div生成 */
    const div = document.createElement("div");
    div.className = "listRow";
    div.innerText = inputText;
   
   /* liタグの子要素に各要素を設定 */ 
   li.appendChild(div);
   console.log(li)
    
   /* 未完了リストに追加 */
   document.getElementById("imcompleteList").appendChild(li);
}

document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());