import "./ServiceApresVente.css";
import React, { Component } from "react";


class ServiceApresVente extends Component {
    constructor(props){
        super(props);
        this.state ={
            isHideAccueil : true,
            isHideVehicule :true ,
            isHideCarrosserie : true,
            isHideElementDossier :true,
            isHideDossierCarrosserie : true,
            isHideRCI :true ,
            isHideContratEntretien : true,
            isHideProdRent :true,
            isHideControleQualite :true,


            espaceCheked:false,
            creditCheked:false,
            tpeCheked:false,
            chequeCheked:false,

            rapidechecked :false ,
            mecaniqueCheked:false,
            pisrinaCheked:false,
            carrosserieCheked:false,
            pneumatiqueCheked:false,

            rciOUIchecked :false ,
            rciNONCheked:false,

            factureCheked :false ,
            certificatControlecheked:false,
            creditCheked:false,
            ordredereparationCheked:false,
            enqueteChaudCheked:false,
            ICMCheked:false,
            ProgrammeEntrCheked:false,

            AccorddeLexpertchecked :false ,
            FichefinCheked:false,

            RCIBultenCheked :false ,
            RCIAttestationCheked:false,
            RCIConstatChecked :false ,

            ContractEntretienChecked :false ,

            ServiceRapideCheked :false ,
            ServiceMecaniqueCheked:false,
            ServiceCrrosserieChecked :false 

        }
    }
    ///cheked handler 
    handleChangeespaceCheked = () => {
        this.setState({espaceCheked : ! this.state.espaceCheked})
    };
    handleChangecreditCheked = () => {
        this.setState({creditCheked : ! this.state.creditCheked})
    };
    handleChangetpeCheked = () => {
        this.setState({tpeCheked : ! this.state.tpeCheked})
      };
    handleChangechequeCheked = () => {
        this.setState({chequeCheked : ! this.state.chequeCheked})
    };






      handleChangerapidechecked = () => {
        this.setState({rapidechecked : ! this.state.rapidechecked})
      };
      handleChangemecaniqueCheked = () => {
        this.setState({mecaniqueCheked : ! this.state.mecaniqueCheked})
      };
      handleChangepisrinaCheked = () => {
        this.setState({pisrinaCheked : ! this.state.pisrinaCheked})
      };
      handleChangecarrosserieCheked = () => {
        this.setState({carrosserieCheked : ! this.state.carrosserieCheked})
      };
      handleChangepneumatiqueCheked = () => {
        this.setState({pneumatiqueCheked : ! this.state.pneumatiqueCheked})
      };





      handleChangerciOUIchecked = () => {
        this.setState({rciOUIchecked : ! this.state.rciOUIchecked})
      };
      handleChangerciNONCheked = () => {
        this.setState({rciNONCheked : ! this.state.rciNONCheked})
      };






      handleChangefactureCheked = () => {
        this.setState({factureCheked : ! this.state.factureCheked})
      };
      handleChangecertificatControlecheked = () => {
        this.setState({certificatControlecheked : ! this.state.certificatControlecheked})
      };
      handleChangecreditCheked = () => {
        this.setState({creditCheked : ! this.state.creditCheked})
      };
      handleChangeordredereparationCheked = () => {
        this.setState({ordredereparationCheked : ! this.state.ordredereparationCheked})
      };
      handleChangeenqueteChaudCheked = () => {
        this.setState({enqueteChaudCheked : ! this.state.enqueteChaudCheked})
      };
      handleChangeICMCheked = () => {
        this.setState({ICMCheked : ! this.state.ICMCheked})
      };
      handleChangeProgrammeEntrCheked = () => {
        this.setState({ProgrammeEntrCheked : ! this.state.ProgrammeEntrCheked})
      };










      handleChangeAccorddeLexpertchecked = () => {
        this.setState({AccorddeLexpertchecked : ! this.state.AccorddeLexpertchecked})
      };
      handleChangeFichefinCheked = () => {
        this.setState({FichefinCheked : ! this.state.FichefinCheked})
      };







      handleChangeRCIBultenCheked = () => {
        this.setState({RCIBultenCheked : ! this.state.RCIBultenCheked})
      };
      handleChangeRCIAttestationCheked = () => {
        this.setState({RCIAttestationCheked : ! this.state.RCIAttestationCheked})
      };
      handleChangeRCIConstatChecked = () => {
        this.setState({RCIConstatChecked : ! this.state.RCIConstatChecked})
      };








      handleChangeContractEntretienChecked = () => {
        this.setState({ContractEntretienChecked : ! this.state.ContractEntretienChecked})
      };






      handleChangeServiceRapideCheked = () => {
        this.setState({ServiceRapideCheked : ! this.state.ServiceRapideCheked})
      };
      handleChangeServiceMecaniqueCheked = () => {
        this.setState({ServiceMecaniqueCheked : ! this.state.ServiceMecaniqueCheked})
      };
      handleChangeServiceCrrosserieChecked = () => {
        this.setState({ServiceCrrosserieChecked : ! this.state.ServiceCrrosserieChecked})
      };






    //show detail
    showAccueil=()=>{
        this.setState({isHideAccueil:! this.state.isHideAccueil})
    }

    showVehicule=()=>{
        this.setState({isHideVehicule:! this.state.isHideVehicule})
    }

    showCarrosserie=()=>{
        this.setState({isHideCarrosserie:! this.state.isHideCarrosserie})
    }

    showElementDossier=()=>{
        this.setState({isHideElementDossier:! this.state.isHideElementDossier})
    }


    showDossierCarrosserie=()=>{
        this.setState({isHideDossierCarrosserie:! this.state.isHideDossierCarrosserie})
    }

    showContratEntre=()=>{
        this.setState({isHideContratEntretien:! this.state.isHideContratEntretien})
    }

    showProdRent=()=>{
        this.setState({isHideProdRent:! this.state.isHideProdRent})
    }

    showRCI=()=>{
        this.setState({isHideRCI:! this.state.isHideRCI})
    }

    showControleQualite=()=>{
        this.setState({isHideControleQualite:! this.state.isHideControleQualite})
    }


    render(){
        return (
            <div className='ServiceApresVente'>
            <h1 className="titlepage">SERVICE APRES VENTE</h1>
            <div class="container">
                <h2 onClick={this.showAccueil}>Accueil et information du client</h2>
                {this.state.isHideAccueil
                ?''
                :
                <div>
                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Nom de client/ Raison Social</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Tél</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Adresse</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Ville</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Type de client</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Site</label>
                    </div>

                    <div class="containerchek">
                        <h1 class="titlechek">Mode de regelement</h1>

                        <div class="groupchek" onClick={this.handleChangeespaceCheked}>
                            <input type="checkbox" id="xd" checked={this.state.espaceCheked} />
                            <label class="labelcheck" for="xd">Espéce</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangecreditCheked}>
                            <input type="checkbox" id="figma" checked={this.state.creditCheked} />
                            <label class="labelcheck" for="figma">Crédit</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangetpeCheked}>
                            <input type="checkbox" id="sketch" checked={this.state.tpeCheked}  />
                            <label class="labelcheck" for="sketch">TPE</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangechequeCheked}>
                            <input type="checkbox" id="sketch" checked={this.state.chequeCheked}  />
                            <label class="labelcheck" for="sketch">Chéque/LC</label>
                        </div>
                    </div>
                    
                </div>

                }
            </div>

             {/* VEHICULE */}

             <div class="container">
                <h2 onClick={this.showVehicule}>Véhicule</h2>
                {this.state.isHideVehicule
                ?''
                :
                <div>
                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Marque</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Modéle</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>N°Chassis</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Matricule</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Kilométrage</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Compagnon</label>
                </div>

                <div class="group">  
                <label>Date d'Entrée</label>    
                <input type="date"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Heure</label>
                </div>

                <div class="group">  
                <label>Date de sortie</label>    
                <input type="date"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Heure</label>
                </div>
                <div class="containerchek">
                        <h1 class="titlechek">Type d'intervention</h1>

                        <div class="groupchek" onClick={this.handleChangerapidechecked}>
                            <input type="checkbox" id="xd" checked={this.state.rapidechecked} />
                            <label class="labelcheck" for="xd">S.RAPIDE</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangemecaniqueCheked}>
                            <input type="checkbox" id="figma" checked={this.state.mecaniqueCheked} />
                            <label class="labelcheck" for="figma">MECANIQUE</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangepisrinaCheked}>
                            <input type="checkbox" id="sketch" checked={this.state.pisrinaCheked}  />
                            <label class="labelcheck" for="sketch">PISRINA</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangecarrosserieCheked}>
                            <input type="checkbox" id="sketch" checked={this.state.carrosserieCheked}  />
                            <label class="labelcheck" for="sketch">CARROSSERIE</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangepneumatiqueCheked}>
                            <input type="checkbox" id="sketch" checked={this.state.pneumatiqueCheked}  />
                            <label class="labelcheck" for="sketch">PNEUMATIQUE</label>
                        </div>
                    </div>
                
            </div>

                }
               
            </div>

            {/* Reparations & carrosserie*/}
            <div class="container">
                <h2 onClick={this.showCarrosserie}>Reparations & carrosserie</h2>
                {this.state.isHideCarrosserie
                ?''
                :
                <div>
                <div class="containerchek">
                        <h1 class="titlechek">RCI</h1>

                        <div class="groupchek" onClick={this.handleChangerciOUIchecked}>
                            <input type="checkbox" id="xd" checked={this.state.rciOUIchecked} />
                            <label class="labelcheck" for="xd">OUI</label>
                        </div>

                        <div class="groupchek" onClick={this.handleChangerciNONCheked}>
                            <input type="checkbox" id="figma" checked={this.state.rciNONCheked} />
                            <label class="labelcheck" for="figma">NON</label>
                        </div>

                    </div>
                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Assurance compagnie</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Montont devis initial</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Montont devis accordé</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Montont franchise</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Montont vétuste </label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Montont payé par l'Assuré</label>
                </div>

                <div class="group">      
                <input type="text"  />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Montont payé par la compagnie</label>
                </div> 
            </div>
                }
            </div>


            {/* Elements de doossier */}
            <div class="container">
                <h2 onClick={this.showElementDossier}>Elements du dossier</h2>
                {this.state.isHideElementDossier
                ?''
                :
                <div class="containerchek">
                    <div class="groupchek" onClick={this.handleChangefactureCheked}>
                        <input type="checkbox" id="xd" checked={this.state.factureCheked} />
                        <label class="labelcheck" for="xd">Facture</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangecertificatControlecheked}>
                        <input type="checkbox" id="figma" checked={this.state.certificatControlecheked} />
                        <label class="labelcheck" for="figma">Certificat du controle</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeordredereparationCheked}>
                        <input type="checkbox" id="sketch" checked={this.state.ordredereparationCheked}  />
                        <label class="labelcheck" for="sketch">Ordre de reparation</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeenqueteChaudCheked}>
                        <input type="checkbox" id="sketch" checked={this.state.enqueteChaudCheked}  />
                        <label class="labelcheck" for="sketch">Enquete a choud</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeICMCheked}>
                        <input type="checkbox" id="sketch" checked={this.state.ICMCheked}  />
                        <label class="labelcheck" for="sketch">ICM</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeProgrammeEntrCheked}>
                        <input type="checkbox" id="sketch" checked={this.state.ProgrammeEntrCheked}  />
                        <label class="labelcheck" for="sketch">Programme d'entretien</label>
                    </div>
                </div>

                }
            </div>


            {/* Pour les dossier carrosserie*/}
            <div class="container">
                <h2 onClick={this.showDossierCarrosserie}>Pour les dossier carrosserie</h2>
                {this.state.isHideDossierCarrosserie
                ?''
                :
                <div class="containerchek">
                    <div class="groupchek" onClick={this.handleChangeAccorddeLexpertchecked}>
                        <input type="checkbox" id="xd" checked={this.state.AccorddeLexpertchecked} />
                        <label class="labelcheck" for="xd">Accord de l'expert</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeFichefinCheked}>
                        <input type="checkbox" id="figma" checked={this.state.FichefinCheked} />
                        <label class="labelcheck" for="figma">Fiche fin de travaux</label>
                    </div>
                </div>

                }
            </div>


            {/* RCI */}
            <div class="container">
                <h2 onClick={this.showRCI}>RCI</h2>
                {this.state.isHideRCI
                ?''
                :
                <div class="containerchek">
                    <div class="groupchek" onClick={this.handleChangeRCIBultenCheked}>
                        <input type="checkbox" id="xd" checked={this.state.RCIBultenCheked} />
                        <label class="labelcheck" for="xd">Bulletin d'ahesion de l'assurancce RC</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeRCIAttestationCheked}>
                        <input type="checkbox" id="figma" checked={this.state.RCIAttestationCheked} />
                        <label class="labelcheck" for="figma">Attestation et Contrat de l'assurance RC</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeRCIConstatChecked}>
                        <input type="checkbox" id="sketch" checked={this.state.RCIConstatChecked}  />
                        <label class="labelcheck" for="sketch">Constat et P.V au declaration du sinistre</label>
                    </div>

                </div>

                }
            </div>


            {/* Contrat d'entretien */}
            <div class="container">
                <h2 onClick={this.showContratEntre}>Contrat d'entretien</h2>
                {this.state.isHideContratEntretien
                ?''
                :
                <div class="containerchek">
                    <div class="groupchek" onClick={this.handleChangeContractEntretienChecked}>
                        <input type="checkbox" id="xd" checked={this.state.ContractEntretienChecked} />
                        <label class="labelcheck" for="xd">Imprime du contract d'entretien</label>
                    </div>
                </div>

                }
            </div>
            {/* Productivite et tentabilité*/}
            <div class="container">
                <h2 onClick={this.showProdRent}>Productivite et rentabilité</h2>
                {this.state.isHideProdRent
                ?''
                :
                <div>
                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Heure de facture</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Heure de travailiées</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Productivite</label>
                    </div>

                    <div class="group">      
                    <input type="text"  />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Efficacite</label>
                    </div>

                   

                    <div> 
                        
                    </div>
                    
                </div>

                }

            </div>


            {/* Controle de qualite et livraison*/}
            <div class="container">
                <h2 onClick={this.showControleQualite}>Controle de qualite et livraison</h2>
                {this.state.isHideControleQualite
                ?''
                :
                <div class="containerchek">
                    <div class="groupchek" onClick={this.handleChangeServiceRapideCheked}>
                        <input type="checkbox" id="xd" checked={this.state.ServiceRapideCheked} />
                        <label class="labelcheck" for="xd">Service rapide</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeServiceMecaniqueCheked}>
                        <input type="checkbox" id="figma" checked={this.state.ServiceMecaniqueCheked} />
                        <label class="labelcheck" for="figma">Service mecanique</label>
                    </div>

                    <div class="groupchek" onClick={this.handleChangeServiceCrrosserieChecked}>
                        <input type="checkbox" id="sketch" checked={this.state.ServiceCrrosserieChecked}  />
                        <label class="labelcheck" for="sketch">Service crrosserie</label>
                    </div>
                </div>

                }
            </div>
            
            <div className="panelSubmit">
                <p className="btn-submit">Envoyer</p>
            </div>

            </div>
          );
    }
 
}

export default ServiceApresVente;
