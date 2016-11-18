import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from "rxjs";
import firebase from 'firebase';

/*
 Generated class for the UserService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UserService {
    firebaseRef: any;
    firebaseAuth: any;
    firebaseDb: any;
    provider: any;
    adminUser : any;
    currentUser:any;
    communityUsersPath:any;
    communities:any={};
    public userCommunities: ReplaySubject<any> = new ReplaySubject(1);
    public currentUserObs:ReplaySubject<any> = new ReplaySubject(1);

    constructor() {
        this.firebaseRef = firebase;
        this.firebaseAuth = firebase.auth();
        this.firebaseDb = firebase.database().ref();
        if(this.firebaseAuth.currentUser) {
            this.getUserById(this.firebaseAuth.currentUser.uid);
        }
    };

    signInWithGoogle() {
        this.provider = new this.firebaseRef.auth.GoogleAuthProvider();
        this.firebaseAuth.signInWithPopup(this.provider).then((result: any) => {
            this.getUserById(result.user.uid);
            console.log('login successful! :' +result)
        }).subscribe((currentUser) => {
            this.currentUser = currentUser;
        }).catch(function (error: any) {
            console.log(error)
        });
    }

    getUserById(reqUserId: any) {
        this.firebaseDb.child('users/'+reqUserId).on("value", (user)=>{
            this.adminUser = user.val();
            this.adminUser["userId"]=reqUserId;
            localStorage.setItem('currentUser',JSON.stringify(this.adminUser));
            localStorage.setItem('currentUserId',reqUserId);
            this.currentUserObs.next(user.val());
        });
    };

    getUserCommunities() {
        let adminCommunities = JSON.parse(localStorage.getItem('currentUser')).communities;
        Object.keys(adminCommunities).forEach((key)=> {
            let wantedCommunityId = adminCommunities[key].communityId;
            this.communityUsersPath = this.firebaseDb.child('communities/' + wantedCommunityId);
            this.getRecords(this.communityUsersPath).subscribe((communityObj)=> {
                this.communities[wantedCommunityId] = communityObj;
                this.userCommunities.next(Object.keys(this.communities));
            })
        })
    }


    getUser(){
        return JSON.parse(localStorage.getItem('currentUser'));
    }


    getRecords(ref) {
        return Observable.create(function (observer: any) {
            function value(snapshot) {
                observer.next(snapshot.val());
            }

            ref.on('value', value);
            return (()=> {
                ref.off('value', value);

            })
        });
    }

}
