import java.util.Scanner;

public class ifelse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
       /* System.out.println("Mời nhập điểm trung bình: ");
        double dtb = sc.nextDouble();

        if(dtb >= 5){
            System.out.println("bạn đỗ");
        }
        else{
            System.out.println("Bạn tạch");
        }*/

        System.out.println("Nhập tổng của 2 số: ");
        double tong = sc.nextDouble();

        System.out.println("Nhập hiệu của 2 số: ");
        double hieu = sc.nextDouble();

        double x = 0, y = 0;

        x = (tong + hieu) / 2;
        y = tong - x;
        System.out.println(x);
        System.out.println(y);

    }
}
