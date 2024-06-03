import java.awt.Color;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.table.DefaultTableModel;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */

/**
 *
 * @author matheus.silva
 */
public class ConsultaServico extends javax.swing.JFrame {

    /**
     * Creates new form ConsultaServico
     */
    public ConsultaServico() {
        initComponents();
         Color cor = new Color(33,44,52);
        getContentPane().setBackground(cor);
        try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/tech_service",
                                                            "root","");
        
    //comando sql
        PreparedStatement st =conexao.prepareStatement("select s.id_servico, s.tipo_servico,s.valor_servico, s.defeito_informado, s.aparelho, s.doc_cliente, c.nome, s.status_servico,s.funcionario_responsavel from servico as s  join cliente as c on s.doc_cliente = c.documento  ");
        
      
        ResultSet retorno = st.executeQuery();//executa o comando select
        DefaultTableModel tblModelo =(DefaultTableModel)tblServicos.getModel();
        while(retorno.next()){
            String linha[]={
                retorno.getString("s.id_servico"),
                retorno.getString("s.tipo_servico"),
                retorno.getString("s.valor_servico"),
                retorno.getString("s.defeito_informado"),
                retorno.getString("s.aparelho"),
                retorno.getString("c.nome"),
                retorno.getString("s.funcionario_responsavel"),
                retorno.getString("s.status_servico")
		
            };
        tblModelo.addRow(linha);    
        }
    }catch (ClassNotFoundException ex){
        JOptionPane.showMessageDialog(null,"Driver não colocado corretamente no library");
    }catch (SQLException ex){
        JOptionPane.showMessageDialog(null, "Verifique os parâmetros de conexão com o banco de dados" + ex.getMessage());
    } 
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jScrollPane1 = new javax.swing.JScrollPane();
        tblServicos = new javax.swing.JTable();
        jLabel1 = new javax.swing.JLabel();
        txtDocumento = new javax.swing.JTextField();
        btnPesquisar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setBackground(new java.awt.Color(204, 255, 204));
        setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        getContentPane().setLayout(null);

        tblServicos.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "O.S", "Tipo de Serviço", "Valor", "Defeito", "Aparelho", "Nome Cliente", "Tecnico Responsavel", "Status"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane1.setViewportView(tblServicos);

        getContentPane().add(jScrollPane1);
        jScrollPane1.setBounds(10, 110, 830, 220);

        jLabel1.setFont(new java.awt.Font("Segoe UI", 1, 14)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(194, 190, 190));
        jLabel1.setText("Documento");
        getContentPane().add(jLabel1);
        jLabel1.setBounds(10, 10, 80, 20);
        getContentPane().add(txtDocumento);
        txtDocumento.setBounds(100, 10, 170, 30);

        btnPesquisar.setText("Pesquisar");
        btnPesquisar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPesquisarActionPerformed(evt);
            }
        });
        getContentPane().add(btnPesquisar);
        btnPesquisar.setBounds(280, 10, 130, 30);

        setSize(new java.awt.Dimension(878, 381));
        setLocationRelativeTo(null);
    }// </editor-fold>                        

    private void btnPesquisarActionPerformed(java.awt.event.ActionEvent evt) {                                             
        String doc = txtDocumento.getText();
         try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/tech_service",
                                                            "root","");
        
    //comando sql
        PreparedStatement st =conexao.prepareStatement("select s.id_servico, s.tipo_servico,s.valor_servico, s.defeito_informado, s.aparelho, s.doc_cliente, c.nome, s.status_servico,s.funcionario_responsavel from servico as s  join cliente as c on s.doc_cliente = c.documento  where s.doc_cliente = ? ");
          st.setString( 1,doc);
      
        ResultSet retorno = st.executeQuery();//executa o comando select
        DefaultTableModel tblModelo =(DefaultTableModel)tblServicos.getModel();
        tblModelo.setRowCount(0);
        while(retorno.next()){
            String linha[]={
                retorno.getString("s.id_servico"),
                retorno.getString("s.tipo_servico"),
                retorno.getString("s.valor_servico"),
                retorno.getString("s.defeito_informado"),
                retorno.getString("s.aparelho"),
                retorno.getString("c.nome"),
                retorno.getString("s.funcionario_responsavel"),
                retorno.getString("s.status_servico")
		
            };
        tblModelo.addRow(linha);    
        }txtDocumento.setText("");
    }catch (ClassNotFoundException ex){
        JOptionPane.showMessageDialog(null,"Driver não colocado corretamente no library");
    }catch (SQLException ex){
        JOptionPane.showMessageDialog(null, "Verifique os parâmetros de conexão com o banco de dados" + ex.getMessage());
    }    
        
    }                                            

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(ConsultaServico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(ConsultaServico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(ConsultaServico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(ConsultaServico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new ConsultaServico().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JButton btnPesquisar;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTable tblServicos;
    private javax.swing.JTextField txtDocumento;
    // End of variables declaration                   
}
