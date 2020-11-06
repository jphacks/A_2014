function openFile(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', (e) => resolve(xhr));
        xhr.responseType = 'json';
           // APIリクエストヘッダー
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-API-KEY", key);
        var City
        var prefCode
        xhr.onload =  function () {
            let data = this.response;
            var rand = Math.floor(Math.random() * data.result.length);//配列添え字乱数
            console.log(data);
            console.log(data.result.length);
            console.log(rand);
            City=data.result[rand].cityName;
            prefCode=data.result[rand].prefCode;
            document.getElementById("result").innerText = City;
                
            };
        xhr.send();
    });
    
    return p;
}

async function loadAllFiles() {
    var key = "ZGUU4HOyL9KDETFUh8lX7lzxQDz9EAdB2W3CNSu0";
            // エンドポイント
            var url = "https://opendata.resas-portal.go.jp/"
            url += "api/v1/cities";

    const xhr1 = await openFile(url);
    
     //prefをとりだすよ
     const prefList = {
        1:"北海道",
        2:"青森"    
        };
        var Pref=prefList[1];
        var ADDR=Pref+City

        return ADDR
    console.log('done!');
}

loadAllFiles();

const Page4 = (props) => {

    const test=() =>{
           

            // APIキー
            var key = "ZGUU4HOyL9KDETFUh8lX7lzxQDz9EAdB2W3CNSu0";
            // エンドポイント
            var url = "https://opendata.resas-portal.go.jp/"
            url += "api/v1/cities";
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'json';
            // APIリクエストヘッダー
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("X-API-KEY", key);
            var City
            var prefCode
            request.onload =  function () {
                let data = this.response;
                var rand = Math.floor(Math.random() * data.result.length);//配列添え字乱数
                console.log(data);
                console.log(data.result.length);
                console.log(rand);
                City=data.result[rand].cityName;
                prefCode=data.result[rand].prefCode;
                document.getElementById("result").innerText = City;
                
            };
            request.send();
            //prefをとりだすよ
            const prefList = {
            1:"北海道",
            2:"青森"    
            };
            var Pref=prefList[1];
            var ADDR=Pref+City

            return ADDR
    }
}