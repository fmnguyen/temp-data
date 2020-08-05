export default `
# =================================
# Paper title: It's All About Political Incentives: Democracy and the Renewable Feed-In Tariff
# Authors: Patrick Bayer (Glasgow) and Johannes Urpelainen (Columbia)
# Journal of Politics

# Last modified: November 7, 2015

# Purpose: R code creates the lineplot in Figure 2(a)
# =================================

rm(list=ls())

year <- seq(1990,2012,1)

demo <- c(1,1,1,2,3,0,0,1,1,3,0,3,4,5,2,2,2,8,3,2,2,1,0)
auto <- c(0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,1,1,1,2,2,1,1)


#==============================
pdf("lineplot.pdf",height=6,width=6)
#==============================

par(mar=c(4,4,4,4))

# line plot
plot(x=year,y=cumsum(demo),type="l",xaxp=c(1990,2012,22),cex.axis=.9,
    ylab="FIT adoption (cumulative)",xlab="Year",ylim=c(0,50),yaxp=c(0,50,5),
    main=c("FIT Adoption over Time, 1990-2012"),las=3)
lines(x=year,y=cumsum(auto))
text(x=2010,y=49,labels=c("Democratic \n countries"),cex=0.9)
text(x=2010,y=16,labels=c("Autocratic \n countries"),cex=0.9)

#===============================
dev.off()
#===============================
`