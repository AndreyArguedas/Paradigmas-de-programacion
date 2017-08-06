/**
<p>Pequeño ejemplo usando JFrame de swing/awt con Eventos
<p> Objetivo ilustrar brevemente uso de Listener y clases anónimas en programación por eventos contrastando con el uso de lambdas con lambda en java8)
@author Carlos Loría-Sáenz
@since 2015
*/
package eif400fp.demo.swing;

import javax.swing.JFrame;
import javax.swing.JButton;
import java.awt.*;
import java.awt.event.*;


public class FrameTest{
	public static void main(String[] args) {
		JFrame f = new JFrame("Frame using anonimous class");
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		f.setSize(400, 400);
		f.setLayout(new FlowLayout());

		// Botón anónimo. Usando una clase "on the fly" anónima. Equivale a una lambda
		f.getContentPane().add(new JButton() {
			public int counter;
			{	this.counter = 1;
				this.setBackground(Color.ORANGE);
				this.setText(this.counter + "");
				// Un Listener para el Boton (maneja cualquier evento)
				this.addActionListener(new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						counter ++;
						setText(counter + "");
					}
			    });
				
		    };
		});
		f.setVisible(true);
	}
}
                /* Con JDK8 Lambdas:
                button.addActionListener((e) -> {
                        counter ++;
						setText(counter + "");
				}); 
				
				
				new Thread(() -> {
                     for (int i=0; i< 9; i++) 
                         System.out.println(i+" Hola Mundo!"));
                }).start();
				*/
