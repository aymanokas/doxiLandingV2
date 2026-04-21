import LegalLayout from '../components/LegalLayout';

export default function MentionsLegales() {
  return (
    <LegalLayout
      title="Mentions Légales"
      subtitle="Informations légales relatives à l'application Doxi et à son éditeur."
      lastUpdated="21 avril 2026"
    >
      {/* Article 1 */}
      <h2>1. Éditeur de l'application</h2>
      <p>
        L'application <strong>Doxi</strong> est éditée par :
      </p>
      <ul>
        <li><strong>Raison sociale :</strong> Solvion</li>
        <li><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</li>
        <li><strong>Siège social :</strong> Casablanca, Maroc</li>
        <li><strong>Registre de commerce :</strong> [N° RC] — À compléter</li>
        <li><strong>Identifiant fiscal (IF) :</strong> [IF] — À compléter</li>
        <li><strong>Patente :</strong> [N° Patente] — À compléter</li>
        <li><strong>Email :</strong> <a href="mailto:contact@doxi.ma">contact@doxi.ma</a></li>
        <li><strong>Téléphone :</strong> [+212 XX XX XX XX] — À compléter</li>
      </ul>

      {/* Article 2 */}
      <h2>2. Directeur de la publication</h2>
      <p>
        Le directeur de la publication est [Nom du responsable], en qualité de gérant de la société éditrice.
      </p>

      {/* Article 3 */}
      <h2>3. Hébergement</h2>
      <p>
        Le site institutionnel <strong>doxi.ma</strong> est hébergé par :
      </p>
      <ul>
        <li><strong>Prestataire :</strong> [Nom de l'hébergeur] — À compléter</li>
        <li><strong>Adresse :</strong> [Adresse de l'hébergeur] — À compléter</li>
        <li><strong>Contact :</strong> [Email ou téléphone de l'hébergeur]</li>
      </ul>
      <p>
        L'application <strong>Doxi</strong> est un logiciel de bureau installé localement sur l'ordinateur du médecin. Aucune donnée patient n'est hébergée sur des serveurs distants. Les données sont stockées exclusivement sur le poste local de l'utilisateur.
      </p>

      {/* Article 4 */}
      <h2>4. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments constituant l'application Doxi (logiciel, interface graphique, logos, textes, icônes, structure) sont protégés par les dispositions de la <strong>Loi n° 2-00 relative aux droits d'auteur et droits voisins</strong> (promulguée par le Dahir n° 1-00-20 du 9 kaada 1420 / 15 février 2000) et par les conventions internationales applicables au Maroc.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments de l'application, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de son éditeur.
      </p>
      <p>
        Toute exploitation non autorisée de l'application est considérée comme constitutive de contrefaçon et poursuivie conformément aux dispositions des articles 61 et suivants de la Loi n° 2-00.
      </p>

      {/* Article 5 */}
      <h2>5. Protection des données personnelles</h2>
      <p>
        Le traitement des données à caractère personnel effectué dans le cadre de l'utilisation de l'application Doxi est régi par la <strong>Loi n° 09-08 du 18 février 2009</strong> relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, et soumis au contrôle de la <strong>Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP)</strong>.
      </p>
      <p>
        Pour toute information relative au traitement de vos données, veuillez consulter notre{' '}
        <a href="/confidentialite">Politique de Confidentialité</a>.
      </p>

      {/* Article 6 */}
      <h2>6. Confidentialité médicale</h2>
      <p>
        Doxi est un outil destiné exclusivement aux professionnels de santé agréés. Le médecin utilisateur est seul responsable du respect du secret médical conformément aux dispositions du <strong>Code de déontologie médicale marocain</strong> et aux obligations légales en vigueur.
      </p>
      <p>
        L'éditeur de Doxi ne dispose d'aucun accès aux données médicales saisies dans l'application, celles-ci étant stockées uniquement en local sur le poste de l'utilisateur.
      </p>

      {/* Article 7 */}
      <h2>7. Responsabilité</h2>
      <p>
        L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site <strong>doxi.ma</strong>. Néanmoins, il ne peut garantir l'exhaustivité, l'exactitude ou la mise à jour de ces informations et décline toute responsabilité pour les dommages directs ou indirects pouvant résulter de leur utilisation.
      </p>
      <p>
        En aucun cas, l'éditeur ne saurait être tenu pour responsable de tout dommage causé par l'utilisation des informations publiées sur le site, notamment en cas d'erreur, d'omission ou d'indisponibilité du service.
      </p>

      {/* Article 8 */}
      <h2>8. Liens hypertextes</h2>
      <p>
        Le site <strong>doxi.ma</strong> peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de données personnelles.
      </p>

      {/* Article 9 */}
      <h2>9. Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes mentions légales sont régies par le <strong>droit marocain</strong>. En cas de litige relatif à leur interprétation ou leur exécution, les tribunaux compétents de <strong>Casablanca (Maroc)</strong> seront seuls compétents.
      </p>
    </LegalLayout>
  );
}
