var objc = JSON.parse($response.body);

objc = {
  "result": {
    "result": "success",
    "msTime": 1709216800128,
    "accountCreatedMillis": null,
    "licenses": [
      {
        "benefits": [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing",
          "CameraObjects",
          "LayerParenting",
          "CloudStorageLowTier"
        ],
        "type": "subscription",
        "store": "apple_app_store",
        "autoRenewing": true,
        "orderNumber": "300001752007005",
        "productId": "alightcreative.motion.5y_t60_1w",
        "period": "5y",
        "label": null,
        "details": null,
        "expires": 1740926942000,
        "valid": true,
        "linkStatus": "linked-current"
      }
    ],
    "warnings": []
  }
}


$done({ body: JSON.stringify(objc) });
