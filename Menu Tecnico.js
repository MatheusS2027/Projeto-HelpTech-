import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.table.DefaultTableModel;
import Classes.NomeFunc;
import java.awt.Color;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */

/**
 *
 * @author matheus.silva
 */
public class MenuTecnico extends javax.swing.JFrame {

    /**
     * Creates new form MenuTecnico
     */
    public MenuTecnico() {
        initComponents();
        Color cor = new Color(33,44,52);
        getContentPane().setBackground(cor);
      
        String nome = NomeFunc.getNomeF();
    try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conexao = DriverManager.getConnection("jdbc:mysql://localhost:3306/tech_service",
                                                            "root","");
        
    //comando sql
        PreparedStatement st =conexao.prepareStatement("select s.id_servico, s.tipo_servico,s.valor_servico, s.defeito_informado, s.aparelho, s.doc_cliente, c.nome, s.status_servico from servico as s  join cliente as c on s.doc_cliente = c.documento  where s.status_servico <> 'Concluido' and s.funcionario_responsavel = ? ");
          st.setString( 1,nome);
      
        ResultSet retorno = st.executeQuery();//executa o comando select
        DefaultTableModel tblModelo =(DefaultTableModel)tblServicos.getModel();
        while(retorno.next()){
            String linha[]={
                retorno.getString("s.id_servico"),
                retorno.getString("s.tipo_servico"),
                retorno.getString("s.valor_servico"),
                retorno.getString("s.defeito_informado"),
                retorno.getString("s.aparelho"),
                retorno.getString("s.doc_cliente"),
                retorno.getString("c.nome"),
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
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        itmConsultaCli = new javax.swing.JMenuItem();
        jMenu2 = new javax.swing.JMenu();
        itmAlterarServico = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Menu Tecnico");
        getContentPane().setLayout(null);

        tblServicos.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "O.S", "Tipo de Serviço", "Valor", "Defeito", "Aparelho", "Doc Cliente", "Nome Cliente", "Status"
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
        jScrollPane1.setBounds(10, 40, 830, 240);

        jLabel1.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(194, 190, 190));
        jLabel1.setText("Serviços Novos");
        getContentPane().add(jLabel1);
        jLabel1.setBounds(330, 5, 140, 25);

        jMenuBar1.setBackground(new java.awt.Color(204, 255, 204));
        jMenuBar1.setOpaque(true);

        jMenu1.setText("Clientes");

        itmConsultaCli.setIcon(new javax.swing.ImageIcon(getClass().getResource("/imagens/person_search_1.png"))); // NOI18N
        itmConsultaCli.setText("Consultar");
        itmConsultaCli.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                itmConsultaCliActionPerformed(evt);
            }
        });
        jMenu1.add(itmConsultaCli);

        jMenuBar1.add(jMenu1);

        jMenu2.setText("Serviços");

        itmAlterarServico.setIcon(new javax.swing.ImageIcon(getClass().getResource("/imagens/alterar.png"))); // NOI18N
        itmAlterarServico.setText("Alterar Status");
        itmAlterarServico.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                itmAlterarServicoActionPerformed(evt);
            }
        });
        jMenu2.add(itmAlterarServico);

        jMenuBar1.add(jMenu2);

        setJMenuBar(jMenuBar1);

        setSize(new java.awt.Dimension(865, 372));
        setLocationRelativeTo(null);
    }// </editor-fold>                        

    private void itmConsultaCliActionPerformed(java.awt.event.ActionEvent evt) {                                               
        new ConsultaCliente().setVisible(true);
    }                                              

    private void itmAlterarServicoActionPerformed(java.awt.event.ActionEvent evt) {                                                  
      new AlterarStatus().setVisible(true);
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
            java.util.logging.Logger.getLogger(MenuTecnico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(MenuTecnico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(MenuTecnico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(MenuTecnico.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new MenuTecnico().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                     
    private javax.swing.JMenuItem itmAlterarServico;
    private javax.swing.JMenuItem itmConsultaCli;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenu jMenu2;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTable tblServicos;
    // End of variables declaration                   
}
