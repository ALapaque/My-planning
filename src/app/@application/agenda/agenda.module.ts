import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AgendaService,
  DayService,
  MonthAgendaService,
  MonthService,
  ScheduleAllModule,
  TimelineMonthService,
  TimelineViewsService,
  WeekService,
  WorkWeekService,
} from '@syncfusion/ej2-angular-schedule';
import { loadCldr, L10n, setCulture } from '@syncfusion/ej2-base';
import * as gregorian from 'cldr-data/main/fr-BE/ca-gregorian.json';
import * as numbers from 'cldr-data/main/fr-BE/numbers.json';
import * as timeZoneNames from 'cldr-data/main/fr-BE/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import { SharedModule } from '../../@shared/shared.module';
import { AgendaToolbarComponent } from './@shared/components/agenda-toolbar/agenda-toolbar.component';
import { AgendaContainerComponent } from './agenda-container.component';
import { AgendaHelperService } from './@shared/services/agenda-helper.service';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaRouting } from './agenda.routing';
import { EventFormComponent } from './@shared/components/forms/event-form/event-form.component';
import { AgendaSettingsComponent } from './@shared/components/agenda-settings/agenda-settings.component';
import { AgendaSettingsContentComponent } from './@shared/components/agenda-settings/agenda-settings-content/agenda-settings-content.component';
import { EventFormContentComponent } from './@shared/components/forms/event-form/event-form-content/event-form-content.component';
import { EventTemplateComponent } from './@shared/components/event-template/event-template.component';
import { EventDetailsComponent } from './@shared/components/event-details/event-details.component';
import { EventDetailsContentComponent } from './@shared/components/event-details/event-details-content/event-details-content.component';
import { EventDetailsHeaderComponent } from './@shared/components/event-details/event-details-header/event-details-header.component';
import { EventService } from '../@shared/services/event.service';
import { AgendaLabelComponent } from './@shared/components/agenda-label/agenda-label.component';
import { DocumentEditorComponent } from './@shared/components/document-editor/document-editor.component';
import {
  DocumentEditorAllModule,
  DocumentEditorContainerAllModule,
} from '@syncfusion/ej2-angular-documenteditor';
import { EventChatComponent } from './@shared/components/event-chat/event-chat.component';
import { AgendaSidebarComponent } from './@shared/components/agenda-sidebar/agenda-sidebar.component';
import { AgendaCalendarSelectorComponent } from './@shared/components/agenda-calendar-selector/agenda-calendar-selector.component';
import { AgendaCalendarBtnComponent } from './@shared/components/agenda-calendar-selector/agenda-calendar-btn/agenda-calendar-btn.component';
import { AgendaFormComponent } from './@shared/components/forms/agenda-form/agenda-form.component';
import { AgendaFormContentComponent } from './@shared/components/forms/agenda-form/agenda-form-content/agenda-form-content.component';

const fr_Local: any = '@syncfusion/ej2-locale/src/fr.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
  fr: {
    'DocumentEditor': {
      'Table': 'Table',
      'Row': 'Rangée',
      'Cell': 'Cellule',
      'Ok': 'D\'accord',
      'Cancel': 'Annuler',
      'Size': 'Taille',
      'Preferred Width': 'Largeur préférée',
      'Points': 'Points',
      'Percent': 'Pour cent',
      'Measure in': 'Mesurer en',
      'Alignment': 'Alignement',
      'Left': 'La gauche',
      'Center': 'Centre',
      'Right': 'Droite',
      'Justify': 'Justifier',
      'Indent from left': 'Retrait de gauche',
      'Borders and Shading': 'Bordures et ombrage',
      'Options': 'Les options',
      'Specify height': 'Précisez la hauteur',
      'At least': 'Au moins',
      'Exactly': 'Exactement',
      'Row height is': 'La hauteur de ligne est',
      'Allow row to break across pages': 'Autoriser la ligne à traverser les pages',
      'Repeat as header row at the top of each page': 'Répéter comme ligne d\'en-tête en haut de chaque page',
      'Vertical alignment': 'Alignement vertical',
      'Top': 'Haut',
      'Bottom': 'Bas',
      'Default cell margins': 'Marges de cellule par défaut',
      'Default cell spacing': 'Espacement des cellules par défaut',
      'Allow spacing between cells': 'Autoriser l\'espacement entre les cellules',
      'Cell margins': 'Marges des cellules',
      'Same as the whole table': 'Identique à toute la table',
      'Borders': 'Les frontières',
      'None': 'Aucun',
      'Style': 'Style',
      'Width': 'Largeur',
      'Height': 'la taille',
      'Letter': 'Lettre',
      'Tabloid': 'Tabloïde',
      'Legal': 'Légal',
      'Statement': 'Déclaration',
      'Executive': 'Exécutif',
      'A3': 'A3',
      'A4': 'A4',
      'A5': 'A5',
      'B4': 'B4',
      'B5': 'B5',
      'Custom Size': 'Format personnalisé',
      'Different odd and even': 'Différent impair et pair',
      'Different first page': 'Première page différente',
      'From edge': 'Du bord',
      'Header': 'Entête',
      'Footer': 'Bas de page',
      'Margin': 'Marges',
      'Paper': 'Papier',
      'Layout': 'Disposition',
      'Orientation': 'Orientation',
      'Landscape': 'Paysage',
      'Portrait': 'Portrait',
      'Table Of Contents': 'Table des matières',
      'Show page numbers': 'Afficher les numéros de page',
      'Right align page numbers': 'Aligner à droite les numéros de page',
      'Nothing': 'Rien',
      'Tab leader': 'Repère de tabulation',
      'Show levels': 'Afficher les niveaux',
      'Use hyperlinks instead of page numbers': 'Utilisez des hyperliens au lieu des numéros de page',
      'Build table of contents from': 'Créer une table des matières à partir de',
      'Styles': 'modes',
      'Available styles': 'Styles disponibles',
      'TOC level': 'Niveau COT',
      'Heading': 'Titre',
      'List Paragraph': 'Paragraphe de liste',
      'Normal': 'Ordinaire',
      'Outline levels': 'Niveaux de contour',
      'Table entry fields': 'Champs de saisie de table',
      'Modify': 'Modifier',
      'Color': 'Couleur',
      'Setting': 'Réglage',
      'Box': 'Boîte',
      'All': 'Tout',
      'Custom': 'Douane',
      'Preview': 'Aperçu',
      'Shading': 'Ombres',
      'Fill': 'Remplir',
      'Apply To': 'Postuler à',
      'Table Properties': 'Propriétés du tableau',
      'Cell Options': 'Options de cellule',
      'Table Options': 'Options de table',
      'Insert Table': 'Insérer un tableau',
      'Number of columns': 'Le nombre de colonnes',
      'Number of rows': 'Nombre de rangées',
      'Text to display': 'Texte à afficher',
      'Address': 'Adresse',
      'Insert Hyperlink': 'Insérer un lien hypertexte',
      'Edit Hyperlink': 'Modifier l\'hyperlien',
      'Insert': 'Insérer',
      'General': 'Général',
      'Indentation': 'Échancrure',
      'Before text': 'Avant le texte',
      'Special': 'Spécial',
      'First line': 'Première ligne',
      'Hanging': 'Pendaison',
      'After text': 'Après le texte',
      'By': 'Par',
      'Before': 'Avant',
      'Line Spacing': 'Interligne',
      'After': 'Après',
      'At': 'À',
      'Multiple': 'Plusieurs',
      'Spacing': 'Espacement',
      'Define new Multilevel list': 'Définir une nouvelle liste à plusieurs niveaux',
      'List level': 'Niveau liste',
      'Choose level to modify': 'Choisissez le niveau à modifier',
      'Level': 'Niveau',
      'Number format': 'Format de nombre',
      'Number style for this level': 'Style de nombre pour ce niveau',
      'Enter formatting for number': 'Entrez la mise en forme du nombre',
      'Start at': 'Commencer à',
      'Restart list after': 'Redémarrez la liste après',
      'Position': 'Position',
      'Text indent at': 'Retrait du texte à',
      'Aligned at': 'Aligné à',
      'Follow number with': 'Suivez le numéro avec',
      'Tab character': 'Caractère de tabulation',
      'Space': 'Espace',
      'Arabic': 'arabe',
      'UpRoman': 'UpRoman',
      'LowRoman': 'LowRoman',
      'UpLetter': 'UpLetter',
      'LowLetter': 'LowLetter',
      'Number': 'Nombre',
      'Leading zero': 'Zéro en tête',
      'Bullet': 'Balle',
      'Ordinal': 'Ordinal',
      'Ordinal Text': 'Texte ordinal',
      'For East': 'Pour l\'Est',
      'No Restart': 'Pas de redémarrage',
      'Font': 'Police de caractère',
      'Font style': 'Le style de police',
      'Underline style': 'Souligner le style',
      'Font color': 'Couleur de la police',
      'Effects': 'Effets',
      'Strikethrough': 'Barré',
      'Superscript': 'Exposant',
      'Subscript': 'Indice',
      'Double strikethrough': 'Barré double',
      'Regular': 'Ordinaire',
      'Bold': 'Audacieux',
      'Italic': 'Italique',
      'Cut': 'Couper',
      'Copy': 'Copie',
      'Paste': 'Pâte',
      'Hyperlink': 'Hyperlien',
      'Open Hyperlink': 'Ouvrir l\'hyperlien',
      'Copy Hyperlink': 'Copier l\'hyperlien',
      'Remove Hyperlink': 'Supprimer l\'hyperlien',
      'Paragraph': 'Paragraphe',
      'Merge Cells': 'Fusionner des cellules',
      'Insert Above': 'Insérer au-dessus',
      'Insert Below': 'Insérer ci-dessous',
      'Insert Left': 'Insérer à gauche',
      'Insert Right': 'Insérer à droite',
      'Delete': 'Supprimer',
      'Delete Table': 'Supprimer le tableau',
      'Delete Row': 'Supprimer la ligne',
      'Delete Column': 'Supprimer la colonne',
      'File Name': 'Nom de fichier',
      'Format Type': 'Type de format',
      'Save': 'sauvegarder',
      'Navigation': 'La navigation',
      'Results': 'Résultats',
      'Replace': 'Remplacer',
      'Replace All': 'Remplace tout',
      'We replaced all': 'Nous avons remplacé tous',
      'Find': 'Trouver',
      'No matches': 'Pas de correspondance',
      'All Done': 'Terminé',
      'Result': 'Résultat',
      'of': 'de',
      'instances': 'instances',
      'with': 'avec',
      'Click to follow link': 'Cliquez pour suivre le lien',
      'Continue Numbering': 'Continuer la numérotation',
      'Bookmark name': 'Nom du signet',
      'Close': 'Fermer',
      'Restart At': 'Redémarrer à',
      'Properties': 'Propriétés',
      'Name': 'Nom',
      'Style type': 'Type de style',
      'Style based on': 'Style basé sur',
      'Style for following paragraph': 'Style pour le paragraphe suivant',
      'Formatting': 'Mise en page',
      'Numbering and Bullets': 'Numérotation et puces',
      'Numbering': 'Numérotage',
      'Update Field': 'Champ de mise à jour',
      'Edit Field': 'Modifier le champ',
      'Bookmark': 'Signet',
      'Page Setup': 'Mise en page',
      'No bookmarks found': 'Aucun signet trouvé',
      'Number format tooltip information': 'Format numérique à un niveau: </br> [PREFIX]% [LEVELNUMBER] [SUFFIX] </br> Par exemple, Chapitre% 1. affichera la numérotation comme </br> Chapitre 1. Article </br> Chapitre 2. Article </br> ... </br> Chapitre N. Article </br> </br> Format numérique à plusieurs niveaux: </ br > [PREFIX]% [LEVELNUMBER] [SUFFIX] + [PREFIX]% [LEVELNUMBER] [SUFFIX] </br> Par exemple,% 1.% 2. affichera la numérotation comme </br> 1.1. Article </br> 1.2. Article </br>… </br> 1.N. Article',
      'Format': 'Format',
      'Create New Style': 'Créer un nouveau style',
      'Modify Style': 'Modifier le style',
      'New': 'Nouveau',
      'Bullets': 'Balles',
      'Use bookmarks': 'Utiliser des signets',
      'Table of Contents': 'Table des matières',
      'ok': 'Valider'
    }
  }
});
setCulture('fr');

@NgModule({
  declarations: [
    AgendaContainerComponent,
    AgendaComponent,
    AgendaToolbarComponent,
    EventFormComponent,
    AgendaSettingsComponent,
    AgendaSettingsContentComponent,
    EventFormContentComponent,
    EventTemplateComponent,
    EventDetailsComponent,
    EventDetailsContentComponent,
    EventDetailsHeaderComponent,
    AgendaLabelComponent,
    DocumentEditorComponent,
    EventChatComponent,
    AgendaSidebarComponent,
    AgendaCalendarSelectorComponent,
    AgendaCalendarBtnComponent,
    AgendaFormComponent,
    AgendaFormContentComponent,
  ],
  imports: [
    CommonModule,
    AgendaRouting,
    ScheduleAllModule,
    SharedModule,
    DocumentEditorAllModule,
    DocumentEditorContainerAllModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
  ],
})
export class AgendaModule {
}
