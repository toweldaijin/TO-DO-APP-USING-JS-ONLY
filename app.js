

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

    /* Button(完了)作成 */
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", ()=>{
        alert("完了");
    });

    /* Button(削除)作成 */
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", ()=>{
        /* 押された削除ボタンの親タグ(li)を未完了リストから削除 */
        const parentsOfDiv = deleteButton.parentNode; 
        const deleteTarget = parentsOfDiv.parentNode;
        document.getElementById("imcompleteList").removeChild(deleteTarget);
    });

   /* liタグの子要素に各要素を設定 */ 
   li.appendChild(div);
   div.appendChild(completeButton);
   div.appendChild(deleteButton);
    
   /* 未完了リストに追加 */
   document.getElementById("imcompleteList").appendChild(li);
}

document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());