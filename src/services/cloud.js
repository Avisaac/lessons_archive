import pCloudSdk from 'pcloud-sdk-js';

class Cloud {

    static _cloud;

    static getCloud(callback) {
        if (!this._cloud) {
            pCloudSdk.oauth.initOauthToken({
                client_id: '6Kv3irGPriQ',
                redirect_uri: 'http://localhost:3000/OAuth.html',
                response_type: 'token',
                receiveToken: access_token => {
                        
                    // Create `client` using an oAuth token:
                    this._cloud = pCloudSdk.createClient(access_token);
                    callback(this._cloud);
                }
            });
        }
        else {
            callback(this._cloud);
        }
    }

    static getCurrentFiles(folderid, callback) {
        this.getCloud((cloud) => {
            cloud.listfolder(folderid ? folderid : 0).then((fileMetadata) => {
                callback(fileMetadata);
            });
        })
    }

    static getFolderByPath(path, callback) {

        let pathParts = path.split("/");
        pathParts = pathParts.reduce(part => part.length)

        // Do lot of getCurrentFiles and then by parts of path get the folder
    }
}

export default Cloud;