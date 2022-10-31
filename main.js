const text_area = document.querySelector(".api-text-area");

// buttonにevent追加
const update_button = document.querySelector("#update-button");
update_button.addEventListener('click',get_api_text);

function get_api_text(){
    // axiosでapi取得
    const url = axios.get("https://catfact.ninja/fact")
    .then((res) => {
        // ここでhtmlのテキスト書き換え
        text_area.textContent = res.data.fact;
    })
    .catch(err => {
        console.log("err:", err);
    });
}