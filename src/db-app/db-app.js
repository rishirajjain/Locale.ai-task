import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-fab/paper-fab.js';

/**
 * @customElement
 * @polymer
 */
class DbApp extends PolymerElement {
  static get template() {
    return html`
      <style include="paper-item-shared-styles">
        :host {
          display: block;
        }
        paper-icon-button.big{
        width: 50px;
        height: 50px;
        }

        paper-icon-button.bigs{
        width: 40px;
        height: 40px;
        }
         app-header {
        background-color:white;
        box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.2);
        }

        #head{
          font-size:26px;
          color:#9e6900;

        }
         paper-icon-button.mainicon{
        width: 60px;
        height: 60px;
        }
        iron-icon.big{
        width: 28px;
        height: 28px;
        padding:10px;
        }

        .sidebar{
          box-shadow: 0 3px 5px 0 rgba(0,0,0,0.2);
          height: 100%;
          width: 180px;
          position: fixed;
          z-index: 1;
          top: 65px;
          left: 0;
          background-color: #FDFDFD;
          overflow-x: hidden;
          padding-top: 20px;
          
        }

        .sidecontent{
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .sidecontent li{
          margin: 0;
          padding: 15px;
        }

        .sidecontent li:hover{
          background-color:rgb(209, 139, 0);
          border-radius:5px;
        }

        .maincontent{
          position:absolute;
          height:auto;
          width:80%;
          background-color:#FDFDFD;
          margin-top: 1%;
          left: 180px;
          padding-top:20px;
          padding-left:20px;
          background-color:#F3F2F1; 

        }
        #add{
        position: fixed;
        top:85%;
        left:90%;
        z-index:1;
        }

        
      </style>

      <app-header slot="header">
            <app-toolbar >
              <div main-title="">
              <span id="head"><paper-icon-button src="/images/cloud.svg" class="mainicon"></paper-icon-button>DataBag</span>
              
               
              </div>
              <paper-icon-button src="/images/notif.svg" class="bigs"></paper-icon-button>
              <paper-icon-button src="/images/account.png" class="big"></paper-icon-button>

            </app-toolbar>

          </app-header>

           <div class="sidebar">
              <div>
             <ul class="sidecontent">
              
              <li><iron-icon src="/images/storage.svg" class="big"></iron-icon>My Drive</li>
              <li><iron-icon src="/images/recent.svg" class="big"></iron-icon>Recent</li>
              <li><iron-icon src="/images/shared.svg" class="big"></iron-icon>Shared</li>
              <li><iron-icon src="/images/trash.svg" class="big"></iron-icon>Trash</li>
              <hr>
              <iron-icon src="/images/storageleft.svg" class="big"></iron-icon> Storage
              <paper-progress style="padding:10px;" value="40" secondary-progress="100"></paper-progress>
              <span style="font-size:12px;padding:10px;">6gb of 10gb used</span>
              

              </ul>

              </div>
       </div>
      



        <div class="maincontent"> 
        <h2>Files</h2>
        

        <paper-listbox class="files">
        <button class="paper-item" role="option"><iron-icon src="/images/filem.svg" class="big"></iron-icon> Dummy File 1 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/filep.svg" class="big"></iron-icon>Dummy File 2 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/filepd.svg" class="big"></iron-icon>Dummy File 3 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/filep.svg" class="big"></iron-icon>Dummy File 4 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/filem.svg" class="big"></iron-icon>Dummy File 5 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/filepd.svg" class="big"></iron-icon>Dummy File 6 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/file.svg" class="big"></iron-icon>Dummy File 7 </button>
        <button class="paper-item" role="option"><iron-icon src="/images/file.svg" class="big"></iron-icon>Dummy File 8 </button>
       

        </paper-listbox>

         <paper-fab id="add" src="/images/add.svg" title="Add files"></paper-fab>
      </div>












    `;
  }









}

window.customElements.define('db-app', DbApp);
