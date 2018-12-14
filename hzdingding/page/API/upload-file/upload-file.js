Page({
  uploadFile() {
    dd.chooseImage({
      chooseImage: 1,
      success: res => {
        const path = res.apFilePaths[0];
        console.log(path);
        dd.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            dd.alert({ title: '上传成功' });
          },
          fail: function(res) {
            dd.alert({ title: '上传失败' });
          },
        });
      },
    });
  },
});
