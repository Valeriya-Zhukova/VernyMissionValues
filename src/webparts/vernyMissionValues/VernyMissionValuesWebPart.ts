import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './VernyMissionValuesWebPart.module.scss';
import * as strings from 'VernyMissionValuesWebPartStrings';

export interface IVernyMissionValuesWebPartProps {
  description: string;
}

export default class VernyMissionValuesWebPart extends BaseClientSideWebPart<IVernyMissionValuesWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.vernyMissionValues }">
        <div class="${ styles.container }"> 
          <div class="${ styles.mission }">          
            <div class="${ styles.title }">  
              <h1>
                <a href="https://vernycapital.sharepoint.com/org/SitePages/%D0%9C%D0%B8%D1%81%D1%81%D0%B8%D1%8F,-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5,-%D1%86%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8.aspx">
                  Наша миссия
                </a>
              </h1>
            </div>
            <div class="${ styles.text }">
              <p>
                  Мы объединяем капиталы, привлекаем профессионалов в эффективные команды,
                  внедряем опережающие технологии для создания высокодоходных компаний,
                  тем самым развивая экономику и преумножая общественное благо.
              </p>
            </div>
            </div>
          <div class="${ styles.values }">
            <div class="${ styles.title }">  
              <h1>
                <a href="https://vernycapital.sharepoint.com/org/SitePages/%D0%9C%D0%B8%D1%81%D1%81%D0%B8%D1%8F,-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5,-%D1%86%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8.aspx">
                  Наши ценности
                </a>
              </h1>
            </div>
            <div class="${ styles.text }">
              <p>
                Результативность, профессионализм, лидерство, этичность, доверие и уважение.
              </p>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName, 
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
