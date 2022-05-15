

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
        /* 押された完了ボタンの親タグ(li)を未完了リストから削除 */
        deleteFromImcompleteList(completeButton.parentNode);
        /* 完了リストに追加する要素 */
        const parentOfAddTarget = completeButton.parentNode;
        const addTarget = parentOfAddTarget.parentNode;
        const text = parentOfAddTarget.firstElementChild.innerText;
        console.log(text);
    });   

    /* Button(削除)作成 */
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", ()=>{
        /* 押された削除ボタンの親タグ(li)を未完了リストから削除 */
        deleteFromImcompleteList(deleteButton.parentNode);
    });

   /* liタグの子要素に各要素を設定 */ 
   li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    
   /* 未完了リストに追加 */
   document.getElementById("imcompleteList").appendChild(li);
};

/* 未完了リストから指定の要素を削除 */
function deleteFromImcompleteList(target) {
    const deleteTarget = target.parentNode;
    document.getElementById("imcompleteList").removeChild(deleteTarget);
}

document
    .getElementById("addButton")
    .addEventListener("click", () => onClickAdd());