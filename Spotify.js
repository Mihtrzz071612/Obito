console.log(`spotify-json-2007.11.30`);
let url = $request.url;
// console.log(`原始url:${url}`);
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`替换platform:${url}`);
} else {
    console.log('无需处理');
}
$done({
    url
});