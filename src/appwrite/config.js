import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

     
    }

    async createPost({title, slug, content, featuredImage,
        status, userId}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                );
            } catch (error) {
              console.log("|Appwrite serviec :: creacterPost:: error", error)                
            }
        }

    async updataPost(stug,{title, content, featuredImage, userId, status}){
        try {
            return await this.databases.updataPost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                stug,
                {
                  title,
                  content,
                  featuredImage,
                  status,
                  
                }
            )
        } catch (error) {
            console.log("appwrite servise ::updatePost:: error", error)
            
        }
    }

    async deletePost(stug){
        try{
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                stug

            )
            return true
        } catch (error) {
            console.log("appwrite serverc ::deletepost:: eorror", error);
            return false
        }
    }

    async getPost(slug){
        try {
          return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            stug
          )
        } catch  (error){
            console.log("appwrite serverc ::getpost :: error", error);
            return false

        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
              
            )
        } catch (error) {
            console.log("appwrite serverc ::getposts :: error", error);
            return false
        }
    }
    // file uploadfile servers

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBuckedId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite serverc ::getposts :: error", error);
            return false
        }
    } 

    async deleteFile(fileId){
        try{
           return await this.bucket.deleteFile(
            conf.appwriteBuckedId,
            fileId
        
           )
           return true
        } catch(error){
            console.log("appwrite serverc ::deletefile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBuckedId,
            fileId
        )
    }
}

const service = new Service()
export default service


