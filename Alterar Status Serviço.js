import java.awt.Color;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import java.sql.PreparedStatement;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */

/**
 *
 * @author matheus.silva
 */
public class AlterarStatus extends javax.swing.JFrame {

    /**
     * Creates new form AlterarStatus
     */
    public AlterarStatus() {
        initComponents();
        Color cor = new Color(33,44,52);
        getContentPane().setBackground(cor);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        txtOs = new javax.swing.JTextField();
        cmbStatus = new javax.swing.JComboBox<>();
        btnSalvar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Alterar Status");
        getContentPane().setLayout(null);

        jLabel1.setForeground(new java.awt.Color(194, 190, 190));
        jLabel1.setText("Status");
        getContentPane().add(jLabel1);
        jLabel1.setBounds(10, 90, 80, 20);

        jLabel2.setForeground(new java.awt.Color(194, 190, 190));
        jLabel2.setText("Ordem de Serviço");
        getContentPane().add(jLabel2);
        jLabel2.setBounds(10, 40, 120, 30);
        getContentPane().add(txtOs);
        txtOs.setBounds(120, 50, 150, 22);

        cmbStatus.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Selecione", "Pendente", "Concluido" }));
        getContentPane().add(cmbStatus);
        cmbStatus.setBounds(120, 90, 150, 22);

        btnSalvar.setText("Salvar");
        btnSalvar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSalvarActionPerformed(evt);
            }
        });
        getContentPane().add(btnSalvar);
        btnSalvar.setBounds(130, 130, 110, 30);

        setSize(new java.awt.Dimension(402, 230));
        setLocationRelativeTo(null);
    }// </editor-fold>                        

    private void btnSalvarActionPerformed(java.awt.event.ActionEvent evt) {                                          
        String os,s;
        os = txtOs.getText();
        s= cmbStatus.getSelectedItem().toString();
        
        try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/tech_service",
                                                            "root","");
        
    //comando sql
        PreparedStatement st =conexao.prepareStatement("update servico set status_servico = ? where id_servico = ?");
        st.setString(1,s);
        st.setString(2, os);
        st.executeUpdate();//executando o insert
            JOptionPane.showMessageDialog(null,"Status do Serviço Atualizado");
            txtOs.setText("");
            txtOs.requestFocus();
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
            java.util.logging.Logger.getLogger(AlterarStatus.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(AlterarStatus.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(AlterarStatus.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(AlterarStatus.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new AlterarStatus().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JButton btnSalvar;
    private javax.swing.JComboBox<String> cmbStatus;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JTextField txtOs;
    // End of variables declaration                   
}
