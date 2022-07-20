# Operating Systems

[Home](index.md)

## Fedora Linux and Asus UMxxx keyboard problems

On my Asus UM425 when I cold boot Fedora Linux, the keyboard does not work and I am forced to  restart (warm boot) again, thankfully the touch works. Usb keyboard and mouse are not effected.

To remedy this do the following :

```sh
> sudo nano /etc/default/grub

# edit the following line and add "i8042.probe_defer"
...
GRUB_CMDLINE_LINUX="....   i8042.probe_defer"
...

# run the following line to rebuild the loader
> sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```

