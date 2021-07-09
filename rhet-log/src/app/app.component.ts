import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rhet-log';

  etProducts = [ 'OpenShift Container Platform', 
  'Advanced Cluster Security', 
  'Advanced Cluster Management', 
  'Quay Image Registry',
  'CodeReady Workspaces', 
  'OpenShift Pipelines', 
  'OpenShift GitOps',
  'OpenShift Data Foundations', 
  'Ansible Automation Platform' ];

}
