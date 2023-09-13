import java.util.Scanner;

public class scannerPratice {
    public static void main(String[] args) {

        //khởi tạo 1 đối tượng scanner
        /*Scanner sc = new Scanner(System.in);

        System.out.println("Mời nhập mật khẩu cấp 1: ");
        String mk1 = sc.nextLine();
        System.out.println("Mật khẩu cấp 1 là: " + mk1);

        System.out.println("Mời nhập vào 1 số nguyên: ");
        int soNguyen = sc.nextInt();
        System.out.println("Số đó là: " + soNguyen);

        System.out.println("Mời nhập số thực: ");
        float soThuc = sc.nextFloat();
        System.out.println("Số thực đó là: " + soThuc);

        System.out.println("Mời nhập mật khẩu cấp 2: ");
        String mk2 = sc.nextLine();
        System.out.println("Mật khẩu cấp 1 là: " + mk2);*/

        /*System.out.println("Nhập mật khẩu 1: ");

        String mk1 = new Scanner(System.in).nextLine();

        System.out.println("Mật khẩu 1 là: " + mk1);

        System.out.println("Nhập số nguyên: ");

        int soNguyen = new Scanner(System.in).nextInt();

        System.out.println("Số nguyên là: " + soNguyen);
        System.out.println("Nhập số thực: ");

        float soThuc = new Scanner(System.in).nextFloat();

        System.out.println("Số thực là: " + soThuc);
        System.out.println("Nhập tên: ");12

        String ten = new Scanner(System.in).nextLine();

        System.out.println("tên là: " + ten);*/

       /* System.out.println("Nhập bán kính đường tròn: ");
        float r = new Scanner(System.in).nextFloat();

        float chuVi = 2 * Math.PI * r;
        float dienTich = Math.PI * Math.pow(r, 2);
        System.out.println("Chu vi là: " + chuVi);
        System.out.println("Diện tích là: " + dienTich);*/
        System.out.println("Nhập chiều dài a: ");
        float cd = new Scanner(System.in).nextFloat();

        System.out.println("Nhập chiều rộng: ");
        float cr = new Scanner(System.in).nextFloat();

        float cv = (cd + cr) / 3;
        float dt = cd * cr;

        System.out.println("chu vi là: " + cv);
        System.out.println("diện tích là: " + dt);
    }
}
