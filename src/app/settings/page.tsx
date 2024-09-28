"use client";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  accessibilityOutline,
  cameraOutline,
  cogOutline,
  homeOutline,
  lockClosedOutline,
  micOutline,
  personCircleOutline,
  searchOutline,
  timeOutline,
} from "ionicons/icons";
import React from "react";
import { setupIonicReact } from "@ionic/react";
setupIonicReact();

const Settings: React.FC = () => {
  return (
    <IonPage className="bg-white">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder="Search"></IonSearchbar>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={personCircleOutline} />
            <IonLabel>
              <h2>Apple Account</h2>
              <p>
                Sign in to access your iCloud data, the App Store, Apple
                services and more.
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={cogOutline} />
            <IonLabel>General</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={accessibilityOutline} />
            <IonLabel>Accessibility</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={cameraOutline} />
            <IonLabel>Camera</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={homeOutline} />
            <IonLabel>Home Screen & App Library</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={micOutline} />
            <IonLabel>Siri</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={timeOutline} />
            <IonLabel>Screen Time</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={lockClosedOutline} />
            <IonLabel>Privacy & Security</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
