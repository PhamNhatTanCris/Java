import java.util.Scanner;

public class toanTu3Ngoi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Nhập số nguyên: ");
        int so = sc.nextInt();

        String traLoi = (so % 2 == 0) ? "Chẵn" : "lẻ";
        System.out.println(traLoi);
    }
}
