#!/bin/bash

# This is scanning the network and filtering for MAC addresses like our office sonos speakers
# arp -a |grep b8:e9:37:8b:c7:c8

# Take local macbook ip address, use that subnet for scanning
local_ip_range=`ipconfig getifaddr en0 | sed -e 's/\(^\([0-9]\+\.\)\{3\}\).*/\10\/24/'`;
sonos_port=1400;
# Scan network for port 1400 (sonos) open hosts
echo "local ip range:" $local_ip_range
nmap -T4 -n -p $sonos_port --open --min-parallelism 100 $local_ip_range
