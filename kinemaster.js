var objc = JSON.parse($response.body);

objc = {
  platform: "APPSTORE",
  productId: "com.kinemaster.kios.annual.ia4",
  expiresDate: 32811210727000,
  isSubscribed: true,
  isAutoRenew: true,
};

$done({ body: JSON.stringify(objc) });
