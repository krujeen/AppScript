function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index')
  return  template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .addMetaTag('viewport', 'width=device-width , initial-scale=1')
}

function uploadFiles(form) {
  try {

    var dropbox = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    var sub = form.myClass
    var folder, folders = DriveApp.getFoldersByName(sub);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = dropbox.createFolder(sub);
    }
    var home = 'https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec'

    var file1 = folder.createFile(form.myFile1);
        file1.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var file2 = folder.createFile(form.myFile2);
        file2.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var file3 = folder.createFile(form.myFile3);
        file2.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var file4 = folder.createFile(form.myFile4);
        file4.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    var file5 = folder.createFile(form.myFile5);
        file5.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
    
    var url1 = file1.getUrl()
    var url2 = file2.getUrl()
    var url3 = file3.getUrl()
    var url4 = file4.getUrl()
    var url5 = file5.getUrl()

    var myID = form.myID
    var classroom = form.myClass
    var preflix = form.myPreflix
    var name = form.myName
    var surname = form.mySurName
    
    var ss = SpreadsheetApp.openById('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    var sh = ss.getSheetByName('Q1')
    sh.appendRow([new Date(), classroom, myID, preflix, name, surname, url1, url2, url3, url4, url5])
    return "คุณ.." + name + " "+ surname + " ชั้น " + classroom+ " ส่งเอกสารเรียบร้อยแล้ว  <p><p><a href ='"+url1+"' target='_blank' >คลิกดูหลักฐานการชำระเงิน</a> <p><a href ='"+url2+"' target='_blank' >คลิกดูทะเบียนบ้านนักเรียน</a> <p><a href ='"+url3+"'  target='_blank'>คลิกดูทะเบียนบ้านของบิดา</a> <p><a href ='"+url4+"'  target='_blank'>คลิกดูทะเบียนบ้านของมารดา</a> <p><a href ='"+url5+"' target='_blank' >คลิกดูไฟล์สูจิบัตร</a><p><a href ='"+home+"' >กลับหน้าหลัก</a>"    
  } catch (error) {
    return error.toString();
  }

}
