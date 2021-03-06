/*
 * Created on 18 nov 2016 ( Time 17:08:43 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
package it.csi.sira.backend.metadata.integration.dto;

import java.io.Serializable;

import java.util.Date;

/**
 * Java bean for 'SipraMtdTMetadato' entity
 * 
 * @author Telosys Tools
 *
 */
public class SipraMtdTMetadato implements Serializable {

    private static final long serialVersionUID = 1L;

    //----------------------------------------------------------------------
    // ENTITY PRIMARY KEY ( BASED ON A SINGLE FIELD )
    //----------------------------------------------------------------------
    // DB : id_metadato int4 
    private Integer idMetadato;

    //----------------------------------------------------------------------
    // ENTITY DATA FIELDS 
    //----------------------------------------------------------------------    
    // DB : fk_fontedati int4 
    private Integer fkFontedati;

    // DB : des_metadato varchar 
    private String desMetadato;

    // DB : data_ult_agg date 
    private Date dataUltAgg;



    //----------------------------------------------------------------------
    // GETTER & SETTER FOR THE KEY FIELD
    //----------------------------------------------------------------------
    public void setIdMetadato( Integer idMetadato ) {
        this.idMetadato = idMetadato ;
    }

    public Integer getIdMetadato() {
        return this.idMetadato;
    }


    //----------------------------------------------------------------------
    // GETTERS & SETTERS FOR FIELDS
    //----------------------------------------------------------------------
    public void setFkFontedati( Integer fkFontedati ) {
        this.fkFontedati = fkFontedati;
    }
    public Integer getFkFontedati() {
        return this.fkFontedati;
    }

    public void setDesMetadato( String desMetadato ) {
        this.desMetadato = desMetadato;
    }
    public String getDesMetadato() {
        return this.desMetadato;
    }

    public void setDataUltAgg( Date dataUltAgg ) {
        this.dataUltAgg = dataUltAgg;
    }
    public Date getDataUltAgg() {
        return this.dataUltAgg;
    }


    //----------------------------------------------------------------------
    // toString METHOD
    //----------------------------------------------------------------------
    public String toString() { 
        StringBuffer sb = new StringBuffer(); 
        sb.append(idMetadato);
        sb.append("|");
        sb.append(fkFontedati);
        sb.append("|");
        sb.append(desMetadato);
        sb.append("|");
        sb.append(dataUltAgg);
        return sb.toString(); 
    } 


}
