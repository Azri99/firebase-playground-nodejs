const firebaseadmin = require('../config');


module.exports = class  FirebaseStorage{
    constructor(){
        this.storage = firebaseadmin.storage().bucket();
    }

    async uploadFile(filePath, fileToUpload){
        const uploaded = await this.storage.upload(fileToUpload, {
            destination: filePath + fileToUpload,
            public: true,
        });
        return uploaded;        
    }

    //getFiles({
    //prefix: '{filePath}'    
    //})
    async getUploadFiles(){
        const files = await this.storage.getFiles();
        const filesLink =  files[0].map(e=>e.metadata.mediaLink);
        return filesLink;
    }

}
