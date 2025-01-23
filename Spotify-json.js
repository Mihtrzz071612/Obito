console.log(`spotify-json-2023.09.30`);
let url = $request.url;
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('无需处理');
}
$done({
    url
});
