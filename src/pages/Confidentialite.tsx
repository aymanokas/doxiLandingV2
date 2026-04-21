import LegalLayout from '../components/LegalLayout';

export default function Confidentialite() {
  return (
    <LegalLayout
      title="Politique de Confidentialité"
      subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles, conformément à la Loi n° 09-08."
      lastUpdated="21 avril 2026"
    >
      {/* Intro */}
      <h2>Introduction</h2>
      <p>
        La présente Politique de Confidentialité décrit la manière dont la société éditrice de <strong>Doxi</strong> (ci-après «&nbsp;l'Éditeur&nbsp;» ou «&nbsp;nous&nbsp;») collecte, utilise et protège les données à caractère personnel des utilisateurs de l'application et du site institutionnel <strong>doxi.ma</strong>.
      </p>
      <p>
        Le traitement des données personnelles est régi par la <strong>Loi n° 09-08 du 18 février 2009</strong> relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, telle que promulguée par le Dahir n° 1-09-15 du 22 safar 1430, et soumis au contrôle de la <strong>Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)</strong>.
      </p>

      {/* Article 1 */}
      <h2>Article 1 — Identité du responsable du traitement</h2>
      <ul>
        <li><strong>Responsable du traitement :</strong> [Nom de la société] — À compléter</li>
        <li><strong>Siège social :</strong> Casablanca, Maroc</li>
        <li><strong>Email DPO / contact données :</strong> <a href="mailto:privacy@doxi.ma">privacy@doxi.ma</a></li>
        <li><strong>Déclaration CNDP n° :</strong> [N° déclaration] — À compléter</li>
      </ul>

      {/* Article 2 */}
      <h2>Article 2 — Données collectées</h2>
      <h3>2.1 Données collectées lors de l'inscription et de la gestion de l'abonnement</h3>
      <p>Dans le cadre de la souscription à un abonnement Doxi, nous collectons :</p>
      <ul>
        <li>Nom et prénom du médecin</li>
        <li>Adresse email professionnelle</li>
        <li>Numéro de téléphone professionnel</li>
        <li>Spécialité médicale</li>
        <li>Adresse du cabinet</li>
        <li>Informations de paiement (traitées par notre prestataire de paiement agréé)</li>
      </ul>
      <h3>2.2 Données de santé des patients : stockage exclusivement local</h3>
      <p>
        <strong>Doxi est un logiciel de bureau fonctionnant en mode hors ligne.</strong> Les dossiers médicaux, ordonnances, et toutes les données relatives aux patients sont stockés exclusivement sur le poste informatique local du médecin. <strong>L'Éditeur n'a aucun accès à ces données et ne les collecte pas.</strong>
      </p>
      <p>
        Le médecin utilisateur est donc seul responsable du traitement des données de santé de ses patients, en sa qualité de responsable de traitement au sens de la Loi n° 09-08.
      </p>
      <h3>2.3 Données de navigation (site doxi.ma)</h3>
      <p>
        Lors de la consultation du site institutionnel, nos serveurs collectent automatiquement des données techniques : adresse IP, type de navigateur, pages consultées, date et heure de visite. Ces données sont utilisées à des fins statistiques anonymes et pour garantir la sécurité du site.
      </p>

      {/* Article 3 */}
      <h2>Article 3 — Finalités du traitement</h2>
      <p>Les données collectées sont traitées pour les finalités suivantes :</p>
      <ul>
        <li><strong>Gestion des abonnements :</strong> création et gestion du compte, facturation, renouvellements ;</li>
        <li><strong>Assistance technique :</strong> support client, résolution d'incidents ;</li>
        <li><strong>Communication commerciale :</strong> envoi d'informations relatives aux nouvelles fonctionnalités et offres Doxi (avec possibilité de désinscription à tout moment) ;</li>
        <li><strong>Amélioration du service :</strong> analyse anonymisée des usages pour améliorer l'application ;</li>
        <li><strong>Obligations légales :</strong> respect des obligations comptables, fiscales et légales applicables.</li>
      </ul>

      {/* Article 4 */}
      <h2>Article 4 — Base légale du traitement</h2>
      <p>Les traitements mis en œuvre reposent sur les bases légales suivantes au titre de la Loi n° 09-08 :</p>
      <ul>
        <li><strong>Exécution du contrat :</strong> traitement nécessaire à l'exécution de l'abonnement souscrit ;</li>
        <li><strong>Intérêt légitime :</strong> amélioration de l'application, sécurité informatique ;</li>
        <li><strong>Consentement :</strong> envoi de communications commerciales, utilisation de cookies non essentiels ;</li>
        <li><strong>Obligation légale :</strong> conservation des données comptables et fiscales.</li>
      </ul>

      {/* Article 5 */}
      <h2>Article 5 — Destinataires des données</h2>
      <p>
        Les données personnelles collectées sont destinées aux équipes habilitées de l'Éditeur. Elles peuvent être partagées avec des sous-traitants techniques (hébergement, prestataire de paiement, outil de support), qui s'engagent contractuellement à respecter la confidentialité et la sécurité des données.
      </p>
      <p>
        Aucune donnée personnelle n'est vendue ou cédée à des tiers à des fins commerciales. Aucun transfert de données vers des pays tiers n'est effectué sans garanties appropriées conformément à la réglementation marocaine.
      </p>

      {/* Article 6 */}
      <h2>Article 6 — Durée de conservation</h2>
      <ul>
        <li><strong>Données de compte :</strong> conservées pendant toute la durée de l'abonnement, puis archivées 5 ans à compter de la fin de la relation contractuelle (prescription de droit commun — DOC) ;</li>
        <li><strong>Données de facturation :</strong> conservées 10 ans conformément aux obligations comptables marocaines ;</li>
        <li><strong>Données de navigation :</strong> conservées 12 mois maximum ;</li>
        <li><strong>Données de prospection commerciale :</strong> conservées 3 ans à compter du dernier contact.</li>
      </ul>

      {/* Article 7 */}
      <h2>Article 7 — Droits des personnes concernées</h2>
      <p>
        Conformément aux <strong>articles 7 à 12 de la Loi n° 09-08</strong>, toute personne concernée dispose des droits suivants :
      </p>
      <ul>
        <li><strong>Droit d'information :</strong> être informé des traitements de données vous concernant ;</li>
        <li><strong>Droit d'accès (art. 7) :</strong> obtenir une copie des données vous concernant ;</li>
        <li><strong>Droit de rectification (art. 8) :</strong> faire corriger vos données inexactes ou incomplètes ;</li>
        <li><strong>Droit d'opposition (art. 12) :</strong> vous opposer, pour des motifs légitimes, au traitement de vos données ;</li>
        <li><strong>Droit de suppression :</strong> demander l'effacement des données dans les limites prévues par la loi ;</li>
        <li><strong>Droit de portabilité :</strong> recevoir vos données dans un format structuré et lisible.</li>
      </ul>
      <p>
        Pour exercer ces droits, adressez votre demande accompagnée d'une copie de votre pièce d'identité à :{' '}
        <a href="mailto:privacy@doxi.ma">privacy@doxi.ma</a>
      </p>
      <p>
        En cas de réponse insatisfaisante, vous disposez du droit de saisir la <strong>CNDP</strong> :{' '}
        <a href="https://www.cndp.ma" target="_blank" rel="noopener noreferrer">www.cndp.ma</a>
      </p>

      {/* Article 8 */}
      <h2>Article 8 — Sécurité des données</h2>
      <p>
        L'Éditeur met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre toute perte, destruction, altération, accès non autorisé ou divulgation, conformément à l'<strong>article 23 de la Loi n° 09-08</strong>.
      </p>
      <p>
        Ces mesures incluent notamment : chiffrement des transmissions (TLS/HTTPS), contrôle d'accès strict, journalisation des accès, et procédures de gestion des incidents de sécurité.
      </p>
      <p>
        Concernant les données stockées sur le poste local du médecin via l'application Doxi, il appartient à l'Utilisateur de mettre en place des mesures de sécurité adéquates (antivirus, chiffrement du disque, sauvegarde régulière, accès sécurisé au poste de travail).
      </p>

      {/* Article 9 */}
      <h2>Article 9 — Cookies</h2>
      <p>
        Le site <strong>doxi.ma</strong> peut utiliser des cookies techniques nécessaires au bon fonctionnement du site. Des cookies analytiques anonymisés peuvent également être déposés, sous réserve de votre consentement.
      </p>
      <p>
        Vous pouvez à tout moment paramétrer votre navigateur pour refuser les cookies. Le refus des cookies techniques peut affecter le fonctionnement de certaines fonctionnalités du site.
      </p>
      <p>
        L'application de bureau Doxi n'utilise pas de cookies.
      </p>

      {/* Article 10 */}
      <h2>Article 10 — Modifications de la politique de confidentialité</h2>
      <p>
        L'Éditeur se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Toute modification substantielle sera notifiée aux Utilisateurs par email ou via une notification dans l'application. La date de dernière mise à jour est indiquée en haut de ce document.
      </p>

      {/* Article 11 */}
      <h2>Article 11 — Contact</h2>
      <p>
        Pour toute question relative à la présente Politique de Confidentialité ou pour exercer vos droits, contactez notre délégué à la protection des données :
      </p>
      <ul>
        <li><strong>Email :</strong> <a href="mailto:privacy@doxi.ma">privacy@doxi.ma</a></li>
        <li><strong>Adresse postale :</strong> [Adresse du siège social] — À compléter, Casablanca, Maroc</li>
        <li><strong>CNDP :</strong> <a href="https://www.cndp.ma" target="_blank" rel="noopener noreferrer">www.cndp.ma</a></li>
      </ul>
    </LegalLayout>
  );
}
